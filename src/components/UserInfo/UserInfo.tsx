import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './UserInfo.module.css';

const UserInfo: React.FC = () => {

    const appState = useSelector((state: AppStateType) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (appState.selectedUserItem) {
            dispatch(getUserInfo(appState.selectedUserItem.login));
            document.title = appState.selectedUserItem.login;
        }
    }, [appState.selectedUserItem, dispatch]);

    return (
        <div>
            {appState.userInfo ?
                <>
                    <h1 className={styles.title}>User Information</h1>
                    <div className={styles.wrp}>
                        <div>
                            <img src={appState.userInfo.avatar_url ? appState.userInfo.avatar_url : undefined}
                                 className={styles.img}
                                 alt='...'
                            />
                            <div className={styles.user_name}><b>{appState.userInfo.name || appState.userInfo.login}</b></div>
                            <div>ID: <b>{appState.userInfo.id}</b></div>
                            {appState.userInfo.location ? <div>Location: <b>{appState.userInfo.location}</b></div> : null}
                            <div>Followers: <b>{appState.userInfo.followers}</b></div>
                            <div>Following: <b>{appState.userInfo.following}</b></div>
                            <div>Account created: <b>{appState.userInfo.created_at?.substr(0, 10)}</b></div>
                            <div>Repositories:
                                <a href={`https://github.com/${appState.userInfo.login}?tab=repositories`}>
                                    <b>{`https://github.com/${appState.userInfo.login}?tab=repositories`}</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
                :
                null
            }
        </div>
    )
}

export default UserInfo;
