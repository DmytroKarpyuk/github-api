import React from "react";
import styles from './GithubApi.module.css';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {UserType} from "./UsersList";

const User: React.FC<PropsType> = ({user, selectedUser, setSelectedUser}) => {
    return (
        <div className={styles.user}>
            <ListItem className={selectedUser === user ? styles.selected : ''} onClick={() => setSelectedUser(user)}>
                <ListItemAvatar>
                    <Avatar alt={user.login} src={user.avatar_url}/>
                </ListItemAvatar>
                <ListItemText primary={user.login} secondary={`id:${user.id}`}/>
            </ListItem>
        </div>

    )
}

export default User;

type PropsType = {
    user: UserType
    selectedUser: UserType | null
    setSelectedUser: (user: UserType) => void
}

