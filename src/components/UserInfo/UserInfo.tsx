import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserRepos} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './UserInfo.module.css';
import folderRepoImg from '../../assets/folder.svg';
import Languages from '../Languages/Languages';
import UserDetails from './UserDetails/UserDetails'
import StatItem from '../StatItem/StatItem';
import storageImg from '../../assets/Storage_small.svg';
import folderGreenImg from '../../assets/Folder_green_small.svg';
import followersImg from '../../assets/Followers.svg';
import followingImg from '../../assets/Following.svg';
import Preloader from '../Preloader/Preloader';

const UserInfo: React.FC = () => {

    const isUserReposFetching = useSelector((state: AppStateType) => state.app.isUserReposFetching);
    const userInfo = useSelector((state: AppStateType) => state.app.userInfo);
    const userReposList = useSelector((state: AppStateType) => state.app.userReposList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            dispatch(getUserRepos(userInfo.login));
            document.title = userInfo.login;
        }
    }, [userInfo, dispatch]);

    return (
        <div>
            {userInfo &&
            <>
                <h1 className={styles.title}>Profile Information</h1>
                <div className={styles.wrp}>
                    <UserDetails userInfo={userInfo}/>
                    <div className={styles.statistic_row}>
                        <StatItem statItemImg={storageImg} statItemName='PUBLIC REPOSITORIES' value={'public_repos' in userInfo ? userInfo.public_repos : 0}/>
                        <StatItem statItemImg={folderGreenImg} statItemName='PUBLIC GISTS' value={'public_gists' in userInfo ? userInfo.public_gists : 0}/>
                        <StatItem statItemImg={followersImg} statItemName='FOLLOWERS' value={'followers' in userInfo ? userInfo.followers : 0}/>
                        <StatItem statItemImg={followingImg} statItemName='FOLLOWING' value={'following' in userInfo ? userInfo.following : 0}/>
                    </div>
                    {!!userReposList?.length &&
                    <div>
                        <h2 className={styles.repos_title}>Latest Repositories:</h2>
                        <div className={styles.repositories_wrp}>
                            {isUserReposFetching
                                ?
                                <Preloader/>
                                :
                                <>
                                    {userReposList?.map((r) =>
                                        <div key={r.id} className={styles.repo_wrp}>
                                            <div className={styles.repo_inner_wrp}>
                                                <img src={folderRepoImg} alt='repo img'/>
                                                <b>{r.name}</b>
                                            </div>
                                            <Languages languagesInfo={r.languagesInfo}/>
                                        </div>
                                    )}
                                    <div className={styles.view_all_repositories_wrp}>
                                        <a href={`https://github.com/${userInfo?.login}?tab=repositories`}
                                           className={styles.view_all_repositories}>
                                            View all repositories
                                        </a>
                                    </div>
                                </>
                            }
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
