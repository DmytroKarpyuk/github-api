import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo, getUserRepos} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './UserInfo.module.css';
import folderRepoImg from '../../assets/folder.svg';
import Languages from '../RepoInfo/Languages/Languages';
import UserDetails from './UserDetails/UserDetails'
import Statistic from '../Statistic/Statistic'
// import RepoItem from '../Search/ResultsList/ReposList/RepoItem/RepoItem';

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

    // const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    //     alert(e.currentTarget);
    // };

    return (
        <div>
            {appState.userInfo &&
            <>
                <h1 className={styles.title}>User Information</h1>
                <div className={styles.wrp}>
                    <UserDetails userInfo={appState.userInfo}/>
                    <Statistic statInfo={appState.userInfo}/>
                    {!!appState.userReposList?.length &&
                    <div>
                        <h2 className={styles.repos_title}>Latest Repositories:</h2>
                        <div className={styles.repositories_wrp}>
                            {appState.userReposList?.map((r) =>
                                <>
                                    <div key={r.id} className={styles.repo_wrp}>
                                        <div className={styles.repo_inner_wrp}>
                                            <img src={folderRepoImg} alt='repo img'/>
                                            <b>{r.name}</b>
                                        </div>
                                        {/*<RepoItem repoItem={r}/>*/}
                                        <Languages languagesInfo={r.languagesInfo}/>
                                    </div>
                                </>
                            )}

                            <div>
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
