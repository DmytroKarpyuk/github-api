import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './UserItemsList.module.css';
import {UserType} from '../../../../http/api';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../store/store';
import {actions} from '../../../../store/reducers/app-reducer';

const UserItemsList: React.FC = () => {

    const userItems = useSelector((state: AppStateType) => state.app.userResultItems);
    const showUserItems = useSelector((state: AppStateType) => state.app.showUserItems);
    const userItemsTotalCount = useSelector((state: AppStateType) => state.app.userItemsTotalCount);
    const dispatch = useDispatch();

    const showItemsHandler = () => {
        dispatch(actions.setShowUserItems(10));
    };

    return (
        <div className={styles.wrp}>
            <div className={styles.users_result_title}>
                <b>List of GitHub users:</b>
            </div>
            {userItems?.map((u: UserType, index) => index < showUserItems ?
                <div key={u.id}>
                    <UserItem userItem={u}/>
                </div> : null
            )}
            {userItemsTotalCount > 3 ?
                <div className={styles.users_show_more} onClick={showItemsHandler}>
                    <b>Show more ({userItemsTotalCount} results)</b>
                </div> : null
            }
        </div>
    )
}

export default UserItemsList;
