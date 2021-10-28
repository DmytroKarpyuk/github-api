import React from 'react';
import styles from './UserItem.module.css';
import {UserItemType} from '../../../../../http/api';
import {useDispatch} from 'react-redux';
import {actions} from '../../../../../store/reducers/users-reducer';

const UserItem: React.FC<PropsType> = ({user}) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(actions.setSelectedUser(user));
        dispatch(actions.setIsInfoMode(true));
        dispatch(actions.setUserItems(null));
    };

    return (
        <div className={styles.wrp} onClick={clickHandler}>
            <div className={styles.card}>
                <img className={styles.avatar} alt={user.login} src={user.avatar_url}/>
                <div className={styles.user_info}>
                    <div className={styles.user_name}><b>{user.login}</b></div>
                    <div className={styles.user_id}>id: {user.id}</div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;

type PropsType = {
    user: UserItemType
}

