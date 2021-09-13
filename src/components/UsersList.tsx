import React, {useEffect, useState} from "react";
import styles from './GithubApi.module.css';
import axios from "axios";
import {UserDetailsType} from "./UserDetails";

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
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Login</th>
                            <th>Followers</th>
                            <th>Following</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((u: UserType) => {
                                return (
                                    <tr key={u.id} className={selectedUser === u ? styles.selected : ''}
                                        onClick={() => setSelectedUser(u)}>
                                        <td>{u.id}</td>
                                        <td>{u.login}</td>
                                        <td>???</td>
                                        <td>???</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div> : null
            }
        </>
    )
}

export default UsersList;

export type UserType = {
    id: number
    login: string
    repos_url: string
}
type PropsType = {
    users: UserType[] | null
    setUserDetails: (data: UserDetailsType) => void | null
}