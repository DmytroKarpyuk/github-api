import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo, getUserRepos} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './UserInfo.module.css';
import folderRepoImg from '../../assets/folder.svg';
import Languages from '../RepoInfo/Languages/Languages';
import UserDetails from './UserDetails/UserDetails'
import StatItem from '../StatItem/StatItem';
import storageImg from '../../assets/Storage_small.svg';
import folderGreenImg from '../../assets/Folder_green_small.svg';
import followersImg from '../../assets/Followers.svg';
import followingImg from '../../assets/Following.svg';

const UserInfo: React.FC = () => {

    const appState = useSelector((state: AppStateType) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (appState.selectedUserItem) {
            dispatch(getUserInfo(appState.selectedUserItem.login));
            dispatch(getUserRepos(appState.selectedUserItem.login));
            document.title = appState.selectedUserItem.login;
        }
    }, [appState.selectedUserItem, dispatch]);

    return (
        <div>
            {appState.userInfo &&
            <>
                <h1 className={styles.title}>Profile Information</h1>
                <div className={styles.wrp}>
                    <UserDetails userInfo={appState.userInfo}/>
                    <div className={styles.statistic_row}>
                        <StatItem statItemImg={storageImg} statItemName='PUBLIC REPOSITORIES' value={'public_repos' in appState.userInfo ? appState.userInfo.public_repos : 0}/>
                        <StatItem statItemImg={folderGreenImg} statItemName='PUBLIC GISTS' value={'public_gists' in appState.userInfo ? appState.userInfo.public_gists : 0}/>
                        <StatItem statItemImg={followersImg} statItemName='FOLLOWERS' value={'followers' in appState.userInfo ? appState.userInfo.followers : 0}/>
                        <StatItem statItemImg={followingImg} statItemName='FOLLOWING' value={'following' in appState.userInfo ? appState.userInfo.following : 0}/>
                    </div>
                    {!!appState.userReposList?.length &&
                    <div>
                        <h2 className={styles.repos_title}>Latest Repositories:</h2>
                        <div className={styles.repositories_wrp}>
                            {appState.userReposList?.map((r) =>
                                <div key={r.id} className={styles.repo_wrp}>
                                    <div className={styles.repo_inner_wrp}>
                                        <img src={folderRepoImg} alt='repo img'/>
                                        <b>{r.name}</b>
                                    </div>
                                    <Languages languagesInfo={r.languagesInfo}/>
                                </div>
                            )}
                            <div className={styles.view_all_repositories_wrp}>
                                <a href={`https://github.com/${appState.selectedUserItem?.login}?tab=repositories`}
                                   className={styles.view_all_repositories}>
                                    View all repositories
                                </a>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </>
            }
        </div>
    )
}

export default UserInfo;
