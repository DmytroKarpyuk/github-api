import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContributors, getLanguagesInfo, getRepoInfo} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './RepoInfo.module.css';
import Languages from './Languages/Languages';
import RepoDetails from './RepoDetails/RepoDetails';
import StatItem from '../Statistic/StatItem/StatItem';
import storageImg from '../../assets/Storage_small.svg';
import folderGreenImg from '../../assets/Folder_green_small.svg';
import followersImg from '../../assets/Followers.svg';
import followingImg from '../../assets/Following.svg';

const RepoInfo: React.FC = () => {

    const appState = useSelector((state: AppStateType) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (appState.selectedRepoItem) {
            dispatch(getRepoInfo(appState.selectedRepoItem.owner.login, appState.selectedRepoItem.name));
            dispatch(getLanguagesInfo(appState.selectedRepoItem.owner.login, appState.selectedRepoItem.name));
            dispatch(getContributors(appState.selectedRepoItem.owner.login, appState.selectedRepoItem.name));
            document.title = appState.selectedRepoItem.name;
        }
    }, [appState.selectedRepoItem, dispatch]);

    return (
        <div>
            {appState.repoInfo &&
            <>
                <h1 className={styles.title}>Repository Information</h1>
                <div className={styles.wrp}>
                    <RepoDetails repoInfo={appState.repoInfo}/>
                    <div className={styles.statistic_row}>
                        <StatItem statItemImg={storageImg} statItemName='SIZE' value={(appState.repoInfo.size / 1000).toFixed(2) + ' MB'}/>
                        <StatItem statItemImg={folderGreenImg} statItemName='VISIBILITY' value={appState.repoInfo.visibility.toUpperCase()}/>
                        <StatItem statItemImg={followersImg} statItemName='FORKS' value={appState.repoInfo.forks}/>
                        <StatItem statItemImg={followingImg} statItemName='LANGUAGE' value={appState.repoInfo.language}/>
                    </div>
                    <h2 className={styles.title}>Languages:</h2>
                    <div className={styles.languages_wrp}>
                        <Languages languagesInfo={appState.languagesInfo}/>
                    </div>
                    <div className={styles.about_contributors_row}>
                        {appState.repoInfo.description &&
                        <div className={styles.about_contributors_wrp}>
                            <h3 className={styles.title}>About:</h3>
                            <div className={styles.about_contributors_block}>{appState.repoInfo.description}</div>
                        </div>
                        }
                        {appState.contributors &&
                        <div className={styles.about_contributors_wrp}>
                            <h3 className={styles.title}>Contributors:</h3>
                            <div className={styles.about_contributors_block}>
                                <div className={styles.inner_row}>
                                    {appState.contributors?.map((contributor, i) =>
                                        i < 3 &&
                                        <div className={styles.contributor_item}>
                                            <img src={contributor.avatar_url} alt='contributor'/>
                                            <div className={styles.contributor_info}>
                                                <span><b>{contributor.login}</b></span>
                                                <span style={{opacity: .5}}>{contributor.id}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <a href={`https://github.com/${appState.repoInfo.owner.login}/${appState.repoInfo.name}/graphs/contributors`}
                                       className={styles.view_all_contributors}>
                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default RepoInfo;
