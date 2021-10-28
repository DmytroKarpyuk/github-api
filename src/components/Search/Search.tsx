import React, {useEffect, useState} from 'react';
import styles from './Search.module.css'
import {getUserItems} from '../../store/reducers/users-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import UserItemsList from './ResultsList/UsersList/UserItemsList';

const Search = () => {

    const [tempSearchValue, setTempSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const usersState = useSelector((state: AppStateType) => state.users);
    const isModal = !!usersState.userItems;
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchValue) {
            dispatch(getUserItems(searchValue));
            setTempSearchValue('');
        }
    }, [searchValue]);


    return (
        <div className={usersState.isInfoMode ? styles.wrp_mode : styles.wrp}>
            <input value={tempSearchValue} type='search' placeholder='Find users' onChange={(e) => {
                setTempSearchValue(e.currentTarget.value)
            }}
            />
            <button className={styles.search_btn} onClick={() => setSearchValue(tempSearchValue)}>
                Search
            </button>
            {isModal && <UserItemsList/>}
        </div>
    )
}

export default Search;
