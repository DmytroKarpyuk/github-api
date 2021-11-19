import React, {useEffect, useState} from 'react';
import styles from './Search.module.css'
import {getRepoItems, getUserResultItems} from '../../store/reducers/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import ResultsList from './ResultsList/ResultsList';
import {AppStateType} from '../../store/store';

const Search = () => {

    const [tempSearchValue, setTempSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const isInfoMode = useSelector((state: AppStateType) => state.app.isInfoMode);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchValue) {
            dispatch(getUserResultItems(searchValue));
            dispatch(getRepoItems(searchValue));
            setTempSearchValue('');
            setSearchValue('');
        }
    }, [dispatch, searchValue]);


    return (
        <div className={isInfoMode ? styles.wrp_mode : styles.wrp}>
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
