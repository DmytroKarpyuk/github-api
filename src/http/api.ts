import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
});

export const usersAPI = {
    getUsers(value: string) {
        return instance.get<SearchResultType>(`search/users?q=${value}`).then(res => res.data);
    },
    getUserInfo(value: string) {
        return instance.get<UserInfoType>(`users/${value}`).then(res => res.data);
    }
};

export type UserItemType = {
    id: number
    login: string
    avatar_url: string
}

export type RepoItemType = {
    repo_id: number
    repo_name: string
    isPrivate: boolean
    description: string
    repos_url: string
}

export type UserInfoType = {
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

type SearchResultType = {
    incomplete_results: boolean
    items: UserItemType[]
    total_count: number
}
