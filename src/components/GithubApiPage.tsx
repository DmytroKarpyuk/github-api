import React, {useState} from "react";
import Search from "./Search";
import UsersList, {UserType} from "./UsersList";
import UsersDetails, {UserDetailsType} from "./UserDetails";
import {Container, Grid} from "@material-ui/core";

const GithubApiPage = () => {

    const [users, setUsers] = useState<UserType[] | null>(null);
    const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);

    return (
        <Container fixed={true}>
            <h1>Github API</h1>
            <Search onSubmit={setUsers}/>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <UsersList users={users} setUserDetails={setUserDetails}/>
                </Grid>
                <Grid item xs={6}>
                    <UsersDetails userDetails={userDetails}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default GithubApiPage;