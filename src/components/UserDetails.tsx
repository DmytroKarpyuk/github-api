import React from 'react';
import styles from './GithubApi.module.css'

const UsersDetails: React.FC<PropsType> = ({userDetails}) => {

    // const [userRepositories, setUserRepositories] = useState([]);

    return (
        <div className={styles.userDetails}>
            {userDetails
                ? <div>
                    <h4>User Details</h4>
                    <img src={userDetails?.avatar_url ? userDetails?.avatar_url : undefined} alt='...'/>
                    <div>ID: <b>{userDetails?.id}</b></div>
                    <div>Name: <b>{userDetails?.name}</b></div>
                    <div>Location: <b>{userDetails?.location}</b></div>
                    <div>Followers</div>
                    <div>Following</div>
                    <div>Repositories: <b>{userDetails?.repos_url}</b></div>
                </div>
                : null
            }
        </div>
    )
}

export default UsersDetails;

export type UserDetailsType = {
    id: number
    name: string | null
    avatar_url: string | null
    location: string | null
    repos_url: string
    followers_url: string
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
