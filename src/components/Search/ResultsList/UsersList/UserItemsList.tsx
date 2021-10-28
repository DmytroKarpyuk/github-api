import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './UserItemsList.module.css';
import {UserItemType} from '../../../../http/api';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../../store/store';

const UserItemsList: React.FC = () => {

    const userItems = useSelector((state: AppStateType) => state.users.userItems);
    const isInfoMode = useSelector((state: AppStateType) => state.users.isInfoMode);

    return (
        <>
            {userItems ?
                <div className={isInfoMode ? styles.wrp_outer_mode : styles.wrp_outer}>
                    <div className={styles.result_title}><b>Search results</b></div>
                    <div className={styles.wrp_inner}>
                        <div>
                            <div>
                                {userItems.map((u: UserItemType) =>
                                    <div key={u.id}>
                                        <UserItem user={u}/>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default UserItemsList;
