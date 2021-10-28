import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../store/reducers/users-reducer';
import {AppStateType} from '../../store/store';
import styles from './UserInfo.module.css';

const UserInfo: React.FC = () => {

    const usersState = useSelector((state: AppStateType) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (usersState.selectedUserItem) {
            dispatch(getUserInfo(usersState.selectedUserItem.login));
            document.title = usersState.selectedUserItem.login;
        }
    }, [usersState.selectedUserItem]);

    return (
        <div>
            {usersState.userInfo ?
                <>
                    <h1 className={styles.title}>User Information</h1>
                    <div className={styles.wrp}>
                        <div>
                            <img src={usersState.userInfo.avatar_url ? usersState.userInfo.avatar_url : undefined}
                                 className={styles.img}
                                 alt='...'
                            />
                            <div className={styles.user_name}><b>{usersState.userInfo.name || usersState.userInfo.login}</b></div>
                            <div>ID: <b>{usersState.userInfo.id}</b></div>
                            {usersState.userInfo.location ? <div>Location: <b>{usersState.userInfo.location}</b></div> : null}
                            <div>Followers: <b>{usersState.userInfo.followers}</b></div>
                            <div>Following: <b>{usersState.userInfo.following}</b></div>
                            <div>Account created: <b>{usersState.userInfo.created_at?.substr(0, 10)}</b></div>
                            <div>Repositories:
                                <a href={`https://github.com/${usersState.userInfo.login}?tab=repositories`}>
                                    <b>{`https://github.com/${usersState.userInfo.login}?tab=repositories`}</b>
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
