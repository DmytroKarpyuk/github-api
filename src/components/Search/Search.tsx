import React, {useEffect, useState} from 'react';
import styles from './Search.module.css'
import {getRepoItems, getUserItems} from '../../store/reducers/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import ResultsList from './ResultsList/ResultsList';
import {AppStateType} from '../../store/store';

const Search = () => {

    const [tempSearchValue, setTempSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [isShowResults, setIsShowResults] = useState(false);
    const isResultsFetching = useSelector((state: AppStateType) => state.app.isResultsFetching);
    const isInfoMode = useSelector((state: AppStateType) => state.app.isInfoMode);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchValue) {
            dispatch(getUserItems(searchValue) as any);
            dispatch(getRepoItems(searchValue) as any);
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
                   onKeyUp={(e) => {
                       if (e.key === 'Enter') {
                           setSearchValue(tempSearchValue);
                           setIsShowResults(true);
                       }
                   }}
            />
            <button
                className={styles.search_btn}
                onClick={() => {
                    setSearchValue(tempSearchValue);
                    setIsShowResults(true);
                }}
                disabled={isResultsFetching || !tempSearchValue}
            >
                Search
            </button>
            <ResultsList isShowResults={isShowResults} setIsShowResults={setIsShowResults}/>
        </div>
    )
}

export default Search;
