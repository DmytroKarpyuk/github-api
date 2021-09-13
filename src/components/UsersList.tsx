import React, {useEffect, useState} from "react";
import styles from './GithubApi.module.css';
import axios from "axios";
import {UserDetailsType} from "./UserDetails";
import {List, Paper} from "@material-ui/core";
import User from "./User";

const UsersList: React.FC<PropsType> = ({users, setUserDetails}) => {

    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
            axios.get<UserDetailsType>(`https://api.github.com/users/${selectedUser?.login}`)
                .then(res => setUserDetails(res.data))
        }
    }, [selectedUser])

    return (
        <>
            {users ?
                <div>
                    <h4 className={styles.title}>List of github users</h4>
                    <Paper elevation={3}>
                        <List className={styles.usersList}>
                            {
                                users.map((u: UserType) => <div key={u.id}><User user={u} selectedUser={selectedUser}
                                                                                 setSelectedUser={setSelectedUser}/></div>)
                            }
                        </List>
                    </Paper>
                </div> : null
            }
        </>
    )
}

export default UsersList;

export type UserType = {
    id: number
    login: string
    avatar_url: string
}
type PropsType = {
    users: UserType[] | null
    setUserDetails: (data: UserDetailsType) => void | null
}
