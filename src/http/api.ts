import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
});

export const userAPI = {
    getUserItems(userLogin: string) {
        return instance.get<UserItemsType>(`search/users?q=${userLogin}`).then(res => res.data);
    },
    getUser(userLogin: string) {
        return instance.get<UserType>(`users/${userLogin}`).then(res => res.data);
    },
    getUserRepos(userLogin: string) {
        return instance.get<RepoType[]>(`users/${userLogin}/repos`).then(res => res.data);
    }
};

export const repoAPI = {
    getRepoItems(repoName: string) {
        return instance.get<RepoItemsType>(`search/repositories?q=${repoName}`).then(res => res.data);
    },
    getRepository(userLogin: string, repoName: string) {
        return instance.get<RepoType>(`repos/${userLogin}/${repoName}`).then(res => res.data);
    },
    getLanguagesInfo(userLogin: string, repoName: string) {
        return instance.get<LanguagesType>(`repos/${userLogin}/${repoName}/languages`).then(res => res.data);
    },
    getContributors(userLogin: string, repoName: string) {
        return instance.get<ContributorType[]>(`repos/${userLogin}/${repoName}/contributors`).then(res => res.data);
    }
};

/** Users types */
export type UserType = {
    id: number
    login: string
    name: string | null
    avatar_url: string
    type: string
    location: string | null
    email: string | null
    html_url: string
    repos_url: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    bio: string | null
    company: string | null
    blog: string | null
}
type UserItemsType = {
    incomplete_results: boolean
    items: UserType[]
    total_count: number
}
export type ContributorType = {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
}

/** Repositories types */
export type RepoType = {
    id: number
    name: string
    full_name: string
    private: boolean
    description: string | null
    visibility: string
    html_url: string
    url: string
    created_at: string
    homepage: string | null
    clone_url: string | null
    language: string | null
    forks: number
    owner: {
        login: string
        id: number
        avatar_url: string
    }
    languages_url: string
    size: number
}
export type LanguagesType = {
    [name: string]: number
}
type RepoItemsType = {
    incomplete_results: boolean
    items: RepoType[]
    total_count: number
}
