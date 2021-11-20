import {ContributorType, LanguagesType, repoAPI, RepoType, userAPI, UserType} from '../../http/api';

const SET_USER_ITEMS = 'app-reducer/SET_USER_ITEMS';
const SET_USER_ITEMS_TOTAL_COUNT = 'app-reducer/SET_USER_ITEMS_TOTAL_COUNT';
const SET_REPO_ITEMS = 'app-reducer/SET_REPO_ITEMS';
const SET_REPO_ITEMS_TOTAL_COUNT = 'app-reducer/SET_REPO_ITEMS_TOTAL_COUNT';
const SET_SELECTED_USER = 'app-reducer/SET_SELECTED_USER';
const SET_SELECTED_REPO = 'app-reducer/SET_SELECTED_REPO';
const SET_USER_INFO = 'app-reducer/SET_USER_INFO';
const SET_USER_REPOS = 'app-reducer/SET_USER_REPOS';
const SET_REPO_INFO = 'app-reducer/SET_REPO_INFO';
const SET_SHOW_USER_ITEMS = 'app-reducer/SET_SHOW_USER_ITEMS';
const SET_SHOW_REPO_ITEMS = 'app-reducer/SET_SHOW_REPO_ITEMS';
const SET_LANGUAGES_INFO = 'app-reducer/SET_LANGUAGES_INFO';
const SET_CONTRIBUTORS = 'app-reducer/SET_CONTRIBUTORS';
const SET_IS_FETCHING = 'app-reducer/SET_IS_FETCHING';
const SET_IS_INFO_MODE = 'app-reducer/SET_IS_INFO_MODE';

const initialState = {
    userResultItems: null as UserType[] | null,
    userItemsTotalCount: 0 as number,
    repoResultItems: null as RepoType[] | null,
    repoItemsTotalCount: 0 as number,
    selectedUserItem: null as UserType | null,
    selectedRepoItem: null as RepoType | null,
    userInfo: null as UserType | null,
    userReposList: null as UserRepoInfoType[] | null,
    repoInfo: null as RepoType | null,
    languagesInfo: {} as LanguagesType,
    contributors: null as ContributorType[] | null,
    showUserItems: 3,
    showRepoItems: 3,
    isFetching: false,
    isInfoMode: false
};

const appReducer = (state = initialState, action: any): UsersReducerStateType => {
    switch (action.type) {
        case SET_USER_ITEMS:
            return {
                ...state,
                userResultItems: action.payload
            };
        case SET_USER_ITEMS_TOTAL_COUNT:
            return {
                ...state,
                userItemsTotalCount: action.payload
            };
        case SET_REPO_ITEMS:
            return {
                ...state,
                repoResultItems: action.payload
            };
        case SET_REPO_ITEMS_TOTAL_COUNT:
            return {
                ...state,
                repoItemsTotalCount: action.payload
            };
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUserItem: action.payload
            };
        case SET_SELECTED_REPO:
            return {
                ...state,
                selectedRepoItem: action.payload
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            };
        case SET_USER_REPOS:
            return {
                ...state,
                userReposList: action.payload
            }
        case SET_REPO_INFO:
            return {
                ...state,
                repoInfo: action.payload
            };
        case SET_SHOW_USER_ITEMS:
            return {
                ...state,
                showUserItems: initialState.showUserItems += action.payload
            };
        case SET_SHOW_REPO_ITEMS:
            return {
                ...state,
                showRepoItems: initialState.showRepoItems += action.payload
            };
        case SET_LANGUAGES_INFO:
            return {
                ...state,
                languagesInfo: action.payload
            };
        case SET_CONTRIBUTORS:
            return {
                ...state,
                contributors: action.payload
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            };
        case SET_IS_INFO_MODE:
            return {
                ...state,
                isInfoMode: action.payload
            };
        default:
            return state;
    }
};

export const actions = {
    setUserItems: (userResultItems: UserType[] | null) => ({
        type: SET_USER_ITEMS, payload: userResultItems
    }),
    setUserItemsTotalCount: (count: number | null) => ({
        type: SET_USER_ITEMS_TOTAL_COUNT, payload: count
    }),
    setRepoItems: (repoResultItems: RepoType[] | null) => ({
        type: SET_REPO_ITEMS, payload: repoResultItems
    }),
    setRepoItemsTotalCount: (count: number | null) => ({
        type: SET_REPO_ITEMS_TOTAL_COUNT, payload: count
    }),
    setSelectedUser: (user: UserType | null) => ({
        type: SET_SELECTED_USER, payload: user
    }),
    setSelectedRepo: (repo: RepoType | null) => ({
        type: SET_SELECTED_REPO, payload: repo
    }),
    setUserInfo: (userInfo: UserType) => ({
        type: SET_USER_INFO, payload: userInfo
    }),
    setUserRepos: (userRepos: UserRepoInfoType[]) => ({
        type: SET_USER_REPOS, payload: userRepos
    }),
    setRepoInfo: (repoInfo: RepoType) => ({
        type: SET_REPO_INFO, payload: repoInfo
    }),
    setShowUserItems: (itemsCount: number) => ({
        type: SET_SHOW_USER_ITEMS, payload: itemsCount
    }),
    setShowRepoItems: (itemsCount: number) => ({
        type: SET_SHOW_REPO_ITEMS, payload: itemsCount
    }),
    setLanguagesInfo: (languagesInfo: LanguagesType) => ({
        type: SET_LANGUAGES_INFO, payload: languagesInfo
    }),
    setContributors: (contributors: ContributorType[]) => ({
        type: SET_CONTRIBUTORS, payload: contributors
    }),
    setIsFetching: (isFetching: boolean) => ({
        type: SET_IS_FETCHING, payload: isFetching
    }),
    setIsInfoMode: (isInfoMode: boolean) => ({
        type: SET_IS_INFO_MODE, payload: isInfoMode
    })
};

export const getUserResultItems = (userName: string) => async (dispatch: any) => {
    dispatch(actions.setIsFetching(true));
    const data = await userAPI.getUsers(userName);
    dispatch(actions.setUserItems(data.items));
    dispatch(actions.setUserItemsTotalCount(data.total_count));
    dispatch(actions.setIsFetching(false));
};

export const getRepoItems = (repoName: string) => async (dispatch: any) => {
    dispatch(actions.setIsFetching(true));
    const data = await repoAPI.getRepos(repoName);
    dispatch(actions.setRepoItems(data.items));
    dispatch(actions.setRepoItemsTotalCount(data.total_count));
    dispatch(actions.setIsFetching(false));
};

export const getUserInfo = (userLogin: string) => async (dispatch: any) => {
    const data = await userAPI.getUserInfo(userLogin);
    dispatch(actions.setUserInfo(data));
};

export const getUserRepos = (userLogin: string) => async (dispatch: any) => {
    const reposData = await userAPI.getUserRepos(userLogin)
        .then(values => values.map(async (repository, i) => {
            if (i < 3) {
                const languagesInfo = await repoAPI.getLanguagesInfo(repository.owner.login, repository.name);
                return {
                    id: values[i].id,
                    name: values[i].name,
                    languagesInfo
                }
            }
        }));
    await Promise.all(reposData).then((values) => {
        const reposInfoList = values.filter((r): r is UserRepoInfoType => r !== undefined);
        dispatch(actions.setUserRepos(reposInfoList));
    });
};

export const getRepoInfo = (login: string, repoName: string) => async (dispatch: any) => {
    const data = await repoAPI.getRepoInfo(login, repoName);
    dispatch(actions.setRepoInfo(data));
};

export const getLanguagesInfo = (login: string, repoName: string) => async (dispatch: any) => {
    const data = await repoAPI.getLanguagesInfo(login, repoName);
    dispatch(actions.setLanguagesInfo(data));
};

export const getContributors = (login: string, repoName: string) => async (dispatch: any) => {
    const data = await repoAPI.getContributors(login, repoName);
    dispatch(actions.setContributors(data));
};

export default appReducer;

type UsersReducerStateType = typeof initialState
type UserRepoInfoType = { id: number, name: string, languagesInfo: LanguagesType }