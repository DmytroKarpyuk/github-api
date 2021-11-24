import {ContributorType, LanguagesType, repoAPI, RepoType, userAPI, UserType} from '../../http/api';

const SET_USER_ITEMS = 'app-reducer/SET_USER_ITEMS';
const SET_USER_ITEMS_TOTAL_COUNT = 'app-reducer/SET_USER_ITEMS_TOTAL_COUNT';
const SET_REPO_ITEMS = 'app-reducer/SET_REPO_ITEMS';
const SET_REPO_ITEMS_TOTAL_COUNT = 'app-reducer/SET_REPO_ITEMS_TOTAL_COUNT';
const SET_USER_INFO = 'app-reducer/SET_USER_INFO';
const SET_USER_REPOS = 'app-reducer/SET_USER_REPOS';
const SET_REPO_INFO = 'app-reducer/SET_REPO_INFO';
const SET_SHOW_USER_ITEMS = 'app-reducer/SET_SHOW_USER_ITEMS';
const SET_SHOW_REPO_ITEMS = 'app-reducer/SET_SHOW_REPO_ITEMS';
const SET_LANGUAGES_INFO = 'app-reducer/SET_LANGUAGES_INFO';
const SET_CONTRIBUTORS = 'app-reducer/SET_CONTRIBUTORS';
const SET_IS_RESULTS_FETCHING = 'app-reducer/SET_IS_RESULTS_FETCHING';
const SET_IS_USER_FETCHING = 'app-reducer/SET_IS_USER_FETCHING';
const SET_IS_REPO_FETCHING = 'app-reducer/SET_IS_REPO_FETCHING';
const SET_IS_USER_REPOS_FETCHING = 'app-reducer/SET_IS_USER_REPOS_FETCHING';
const SET_IS_LANGUAGES_FETCHING = 'app-reducer/SET_IS_LANGUAGES_FETCHING';
const SET_IS_CONTRIBUTORS_FETCHING = 'app-reducer/SET_IS_CONTRIBUTORS_FETCHING';
const SET_IS_INFO_MODE = 'app-reducer/SET_IS_INFO_MODE';
const SET_ERROR = 'app-reducer/SET_ERROR';

const initialState = {
    userResultItems: null as UserType[] | null,
    userItemsTotalCount: 0 as number,
    repoResultItems: null as RepoType[] | null,
    repoItemsTotalCount: 0 as number,
    userInfo: null as UserType | null,
    userReposList: null as UserRepoInfoType[] | null,
    repoInfo: null as RepoType | null,
    languagesInfo: {} as LanguagesType,
    contributors: null as ContributorType[] | null,
    showUserItems: 3,
    showRepoItems: 3,
    isResultsFetching: false,
    isUserFetching: false,
    isRepoFetching: false,
    isUserReposFetching: false,
    isLanguagesFetching: false,
    isContributorsFetching: false,
    isInfoMode: false,
    error: null as string | null
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
        case SET_IS_RESULTS_FETCHING:
            return {
                ...state,
                isResultsFetching: action.payload
            };
        case SET_IS_USER_FETCHING:
            return {
                ...state,
                isUserFetching: action.payload
            };
        case SET_IS_REPO_FETCHING:
            return {
                ...state,
                isRepoFetching: action.payload
            };
        case SET_IS_USER_REPOS_FETCHING:
            return {
                ...state,
                isUserReposFetching: action.payload
            };
        case SET_IS_LANGUAGES_FETCHING:
            return {
                ...state,
                isLanguagesFetching: action.payload
            };
        case SET_IS_CONTRIBUTORS_FETCHING:
            return {
                ...state,
                isContributorsFetching: action.payload
            };
        case SET_IS_INFO_MODE:
            return {
                ...state,
                isInfoMode: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
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
    setUserInfo: (userInfo: UserType | null) => ({
        type: SET_USER_INFO, payload: userInfo
    }),
    setUserRepos: (userRepos: UserRepoInfoType[]) => ({
        type: SET_USER_REPOS, payload: userRepos
    }),
    setRepoInfo: (repoInfo: RepoType | null) => ({
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
    setIsResultsFetching: (isResultsFetching: boolean) => ({
        type: SET_IS_RESULTS_FETCHING, payload: isResultsFetching
    }),
    setIsUserFetching: (isUserFetching: boolean) => ({
        type: SET_IS_USER_FETCHING, payload: isUserFetching
    }),
    setIsRepoFetching: (isRepoFetching: boolean) => ({
        type: SET_IS_REPO_FETCHING, payload: isRepoFetching
    }),
    setIsUserReposFetching: (isUserReposFetching: boolean) => ({
        type: SET_IS_USER_REPOS_FETCHING, payload: isUserReposFetching
    }),
    setIsLanguagesFetching: (isLanguagesFetching: boolean) => ({
        type: SET_IS_LANGUAGES_FETCHING, payload: isLanguagesFetching
    }),
    setIsContributorsFetching: (isContributorsFetching: boolean) => ({
        type: SET_IS_CONTRIBUTORS_FETCHING, payload: isContributorsFetching
    }),
    setIsInfoMode: (isInfoMode: boolean) => ({
        type: SET_IS_INFO_MODE, payload: isInfoMode
    }),
    setError: (error: string) => ({
        type: SET_ERROR, payload: error
    })
};

export const getUserItems = (userName: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsResultsFetching(true));
        const data = await userAPI.getUserItems(userName);
        dispatch(actions.setUserItems(data.items));
        dispatch(actions.setUserItemsTotalCount(data.total_count));
        dispatch(actions.setIsResultsFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export const getRepoItems = (repoName: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsResultsFetching(true));
        const data = await repoAPI.getRepoItems(repoName);
        dispatch(actions.setRepoItems(data.items));
        dispatch(actions.setRepoItemsTotalCount(data.total_count));
        dispatch(actions.setIsResultsFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export const getUser = (userLogin: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsUserFetching(true));
        const data = await userAPI.getUser(userLogin);
        dispatch(actions.setUserInfo(data));
        dispatch(actions.setIsUserFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export const getUserRepos = (userLogin: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsUserReposFetching(true));
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
        dispatch(actions.setIsUserReposFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export const getRepository = (login: string, repoName: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsRepoFetching(true));
        const data = await repoAPI.getRepository(login, repoName);
        dispatch(actions.setRepoInfo(data));
        dispatch(actions.setIsRepoFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export const getLanguagesInfo = (login: string, repoName: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsLanguagesFetching(true));
        const data = await repoAPI.getLanguagesInfo(login, repoName);
        dispatch(actions.setLanguagesInfo(data));
        dispatch(actions.setIsLanguagesFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export const getContributors = (login: string, repoName: string) => async (dispatch: any) => {
    try {
        dispatch(actions.setIsContributorsFetching(true));
        const data = await repoAPI.getContributors(login, repoName);
        dispatch(actions.setContributors(data));
        dispatch(actions.setIsContributorsFetching(false));
    } catch (error: any) {
        if (error.response) {
            dispatch(actions.setError(error.response.data.message))
        } else if (error.request) {

            dispatch(actions.setError(error.request));
        } else {
            dispatch(actions.setError(error.message));
        }
    }
};

export default appReducer;

type UsersReducerStateType = typeof initialState
type UserRepoInfoType = { id: number, name: string, languagesInfo: LanguagesType }
