import {userAPI, UserInfoType, UserItemType, RepoItemType, RepoInfoType, repoAPI, LanguagesType} from '../../http/api';

const SET_USER_ITEMS = 'app-reducer/SET_USER_ITEMS';
const SET_USER_ITEMS_TOTAL_COUNT = 'app-reducer/SET_USER_ITEMS_TOTAL_COUNT';
const SET_REPO_ITEMS = 'app-reducer/SET_REPO_ITEMS';
const SET_REPO_ITEMS_TOTAL_COUNT = 'app-reducer/SET_REPO_ITEMS_TOTAL_COUNT';
const SET_SELECTED_USER = 'app-reducer/SET_SELECTED_USER';
const SET_SELECTED_REPO = 'app-reducer/SET_SELECTED_REPO';
const SET_USER_INFO = 'app-reducer/SET_USER_INFO';
const SET_REPO_INFO = 'app-reducer/SET_REPO_INFO';
const SET_SHOW_USER_ITEMS = 'app-reducer/SET_SHOW_USER_ITEMS';
const SET_SHOW_REPO_ITEMS = 'app-reducer/SET_SHOW_REPO_ITEMS';
const SET_LANGUAGES_INFO = 'app-reducer/SET_LANGUAGES_INFO';
const SET_IS_INFO_MODE = 'app-reducer/SET_IS_INFO_MODE';

const initialState = {
    userItems: null as UserItemType[] | null,
    userItemsTotalCount: 0 as number,
    repoItems: null as RepoItemType[] | null,
    repoItemsTotalCount: 0 as number,
    selectedUserItem: null as UserItemType | null,
    selectedRepoItem: null as RepoItemType | null,
    userInfo: null as UserInfoType | null,
    repoInfo: null as RepoInfoType | null,
    languagesInfo: {} as LanguagesType,
    showUserItems: 3,
    showRepoItems: 3,
    isInfoMode: false
};

const appReducer = (state = initialState, action: any): UsersReducerStateType => {
    switch (action.type) {
        case SET_USER_ITEMS:
            return {
                ...state,
                userItems: action.payload
            };
        case SET_USER_ITEMS_TOTAL_COUNT:
            return {
                ...state,
                userItemsTotalCount: action.payload
            };
        case SET_REPO_ITEMS:
            return {
                ...state,
                repoItems: action.payload
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
    setUserItems: (userItems: UserItemType[] | null) => ({
        type: SET_USER_ITEMS, payload: userItems
    }),
    setUserItemsTotalCount: (count: number | null) => ({
        type: SET_USER_ITEMS_TOTAL_COUNT, payload: count
    }),
    setRepoItems: (repoItems: RepoItemType[] | null) => ({
        type: SET_REPO_ITEMS, payload: repoItems
    }),
    setRepoItemsTotalCount: (count: number | null) => ({
        type: SET_REPO_ITEMS_TOTAL_COUNT, payload: count
    }),
    setSelectedUser: (user: UserItemType | null) => ({
        type: SET_SELECTED_USER, payload: user
    }),
    setSelectedRepo: (repo: RepoItemType | null) => ({
        type: SET_SELECTED_REPO, payload: repo
    }),
    setUserInfo: (userInfo: UserInfoType) => ({
        type: SET_USER_INFO, payload: userInfo
    }),
    setRepoInfo: (repoInfo: RepoInfoType) => ({
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
    setIsInfoMode: (isInfoMode: boolean) => ({
        type: SET_IS_INFO_MODE, payload: isInfoMode
    })
};

export const getUserItems = (userName: string) => async (dispatch: any) => {
    const data = await userAPI.getUsers(userName);
    dispatch(actions.setUserItems(data.items));
    dispatch(actions.setUserItemsTotalCount(data.total_count));
};

export const getRepoItems = (repoName: string) => async (dispatch: any) => {
    const data = await repoAPI.getRepos(repoName);
    dispatch(actions.setRepoItems(data.items));
    dispatch(actions.setRepoItemsTotalCount(data.total_count));
};

export const getUserInfo = (value: string) => async (dispatch: any) => {
    const data = await userAPI.getUserInfo(value);
    dispatch(actions.setUserInfo(data));
};

export const getRepoInfo = (login: string, repoName: string) => async (dispatch: any) => {
    const data = await repoAPI.getRepoInfo(login, repoName);
    dispatch(actions.setRepoInfo(data));
};

export const getLanguagesInfo = (login: string, repoName: string) => async (dispatch: any) => {
    const data = await repoAPI.getLanguagesInfo(login, repoName);
    dispatch(actions.setLanguagesInfo(data));
};

export default appReducer;

type UsersReducerStateType = typeof initialState