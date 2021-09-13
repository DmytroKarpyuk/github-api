import React, {useEffect, useState} from "react";
import axios from "axios";
import {UserType} from "./UsersList";
import {Button, Grid, TextField} from "@material-ui/core";

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
        <Grid container direction="row" justifyContent="center">
            <TextField label="User name or login" variant="filled" value={tempSearchValue} onChange={(e) => {
                setTempSearchValue(e.currentTarget.value)
            }}/>
            <Button variant="contained" color="primary" onClick={() => setSearchValue(tempSearchValue)}>
                Search
            </Button>
        </Grid>
    )
}

export default Search;

type PropsType = {
    onSubmit: (users: UserType[]) => void
}
type SearchResultType = {
    items: UserType[]
}