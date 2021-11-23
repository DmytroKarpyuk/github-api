import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContributors, getLanguagesInfo} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './RepoInfo.module.css';
import Languages from '../Languages/Languages';
import RepoDetails from './RepoDetails/RepoDetails';
import StatItem from '../StatItem/StatItem';
import storageImg from '../../assets/Storage_small.svg';
import folderGreenImg from '../../assets/Folder_green_small.svg';
import followersImg from '../../assets/Followers.svg';
import followingImg from '../../assets/Following.svg';
import Contributors from './Contributors/Contributors';

const RepoInfo: React.FC = () => {

    const repoInfo = useSelector((state: AppStateType) => state.app.repoInfo);
    const contributors = useSelector((state: AppStateType) => state.app.contributors);
    const languagesInfo = useSelector((state: AppStateType) => state.app.languagesInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (repoInfo) {
            dispatch(getLanguagesInfo(repoInfo.owner.login, repoInfo.name));
            dispatch(getContributors(repoInfo.owner.login, repoInfo.name));
            document.title = repoInfo.name;
        }
    }, [repoInfo, dispatch]);

    return (
        <div>
            {repoInfo &&
            <>
                <h1 className={styles.title}>Repository Information</h1>
                <div className={styles.wrp}>
                    <RepoDetails repoInfo={repoInfo}/>
                    <div className={styles.statistic_row}>
                        <StatItem statItemImg={storageImg} statItemName='SIZE' value={(repoInfo.size / 1000).toFixed(2) + ' MB'}/>
                        <StatItem statItemImg={folderGreenImg} statItemName='VISIBILITY' value={repoInfo.visibility.toUpperCase()}/>
                        <StatItem statItemImg={followersImg} statItemName='FORKS' value={repoInfo.forks}/>
                        <StatItem statItemImg={followingImg} statItemName='LANGUAGE' value={repoInfo.language || 'Not specified'}/>
                    </div>
                    {!!Object.keys(languagesInfo).length &&
                    <>
                        <h2 className={styles.title}>Languages:</h2>
                        <div className={styles.languages_wrp}>
                            <Languages languagesInfo={languagesInfo}/>
                        </div>
                    </>
                    }
                    <div className={styles.about_contributors_row}>
                        {repoInfo.description &&
                        <div className={styles.about_contributors_wrp}>
                            <h3 className={styles.title}>About:</h3>
                            <div className={styles.about_contributors_block}>{repoInfo.description}</div>
                        </div>
                        }
                        {!!contributors?.length &&
                        <Contributors/>
                        }
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default RepoInfo;
