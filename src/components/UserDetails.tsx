import React from 'react';
import styles from './GithubApi.module.css'
import {Paper} from "@material-ui/core";

const UsersDetails: React.FC<PropsType> = ({userDetails}) => {

    // const [userRepositories, setUserRepositories] = useState([]);

    return (
        <div className={styles.userDetailsWrp}>
            {userDetails
                ? <div>
                    <h4>User Details</h4>
                    <Paper elevation={3} className={styles.userDetailsCard}>
                        <img src={userDetails?.avatar_url ? userDetails?.avatar_url : undefined} alt='...'/>
                        <div>ID: <b>{userDetails?.id}</b></div>
                        <div>Name: <b>{userDetails?.name || userDetails.login}</b></div>
                        {userDetails?.location ? <div>Location: <b>{userDetails?.location}</b></div> : null}
                        <div>Followers: <b>{userDetails.followers}</b></div>
                        <div>Following: <b>{userDetails.following}</b></div>
                        <div>Account created: <b>{userDetails.created_at.substr(0, 10)}</b></div>
                        <div>Repositories:
                            <a href={`https://github.com/${userDetails.login}?tab=repositories`}><b>{`https://github.com/${userDetails.login}?tab=repositories`}</b></a>
                        </div>
                    </Paper>
                </div>
                : null
            }
        </div>
    )
}

export default UsersDetails;

export type UserDetailsType = {
    id: number
    login: string
    name: string | null
    avatar_url: string | null
    location: string | null
    repos_url: string
    followers: number
    following: number
    created_at: string
}
export type UserRepositoriesType = {
    repo_id: number
    repo_name: string
    isPrivate: boolean
    description: string
    repos_url: string
}
type PropsType = {
    userDetails: UserDetailsType | null
}
