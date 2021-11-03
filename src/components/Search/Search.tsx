import React, {useEffect, useState} from 'react';
import styles from './Search.module.css'
import {getRepoItems, getUserItems} from '../../store/reducers/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import ResultsList from './ResultsList/ResultsList';

const Search = () => {

    const [tempSearchValue, setTempSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const usersState = useSelector((state: AppStateType) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchValue) {
            dispatch(getUserItems(searchValue));
            dispatch(getRepoItems(searchValue));
            setTempSearchValue('');
        }
    }, [dispatch, searchValue]);


    return (
        <div className={usersState.isInfoMode ? styles.wrp_mode : styles.wrp}>
            <input value={tempSearchValue} type='search' placeholder='Find users or repositories'
                   onChange={(e) => {
                       setTempSearchValue(e.currentTarget.value)
                   }}
            />
            <button className={styles.search_btn} onClick={() => setSearchValue(tempSearchValue)}>Search</button>
            <ResultsList/>
        </div>
    )
}

export default Search;
