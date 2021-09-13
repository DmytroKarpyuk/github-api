import React, {useEffect, useState} from "react";
import styles from './GithubApi.module.css';
import axios from "axios";
import {UserType} from "./UsersList";

const Search = ({onSubmit}: PropsType) => {

    const [tempSearchValue, setTempSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState<string | null>(null);

    useEffect(() => {
        if (searchValue) {
            axios.get<SearchResultType>(`https://api.github.com/search/users?q=${searchValue}`)
                .then(res => onSubmit(res.data.items))
        }
    }, [searchValue]);


    return (
        <div>
            <input className={styles.searchInput} value={tempSearchValue} onChange={(e) => {
                setTempSearchValue(e.currentTarget.value)
            }}/>
            <button className={styles.searchBtn} onClick={() => setSearchValue(tempSearchValue)}>Search</button>
        </div>
    )
}

export default Search;

type PropsType = {
    onSubmit: (users: UserType[]) => void
}
type SearchResultType = {
    items: UserType[]
}