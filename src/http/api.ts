import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
});

export const userAPI = {
    getUsers(userName: string) {
        return instance.get<UserItemsResultType>(`search/users?q=${userName}`).then(res => res.data);
    },
    getUserInfo(userName: string) {
        return instance.get<UserInfoType>(`users/${userName}`).then(res => res.data);
    }
};

export const repoAPI = {
    getRepos(repoName: string) {
        return instance.get<RepoItemsResultType>(`search/repositories?q=${repoName}`).then(res => res.data);
    },
    getRepoInfo(login: string, repoName: string) {
        return instance.get<RepoInfoType>(`repos/${login}/${repoName}`).then(res => res.data);
    },
    getLanguagesInfo(login: string, repoName: string) {
        return instance.get<LanguagesType>(`repos/${login}/${repoName}/languages`).then(res => res.data);
    }
};

/** Users types */
export type UserItemType = {
    id: number
    login: string
    avatar_url: string
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
type UserItemsResultType = {
    incomplete_results: boolean
    items: UserItemType[]
    total_count: number
}

/** Repositories types */
export type RepoItemType = {
    id: number
    name: string
    full_name: string
    private: boolean
    description: string
    url: string
    owner: {
        login: string
    }
}
export type LanguagesType = {
    [name: string]: number
}
export type RepoInfoType = {
    id: number
    name: string
    description: string
    full_name: string
    visibility: string
    url: string
    owner: {
        login: string
        id: number
        avatar_url: string
    }
    languages_url: string
    size: number
}
type RepoItemsResultType = {
    incomplete_results: boolean
    items: RepoItemType[]
    total_count: number
}
