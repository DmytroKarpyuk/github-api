import React from 'react';
import styles from './UserItem.module.css';
import {UserItemType} from '../../../../../http/api';
import {useDispatch} from 'react-redux';
import {actions} from '../../../../../store/reducers/app-reducer';

const UserItem: React.FC<PropsType> = ({userItem}) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(actions.setSelectedUser(userItem));
        dispatch(actions.setSelectedRepo(null));
        dispatch(actions.setUserItems(null));
        dispatch(actions.setRepoItems(null));
        dispatch(actions.setIsInfoMode(true));
    };

    return (
        <div className={styles.wrp} onClick={clickHandler}>
            <div className={styles.card}>
                <img className={styles.avatar} alt={userItem.login} src={userItem.avatar_url}/>
                <div>
                    <div className={styles.user_name}><b>{userItem.login}</b></div>
                    <div className={styles.user_id}>id: {userItem.id}</div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;

type PropsType = {
    userItem: UserItemType
}

