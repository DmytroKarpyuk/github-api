import {usersAPI, UserInfoType, UserItemType, RepoItemType} from '../../http/api';

const SET_USER_ITEMS = 'users-reducer/SET_USER_ITEMS';
const SET_REPO_ITEMS = 'users-reducer/SET_REPO_ITEMS';
const SET_SELECTED_USER = 'users-reducer/SET_SELECTED_USER';
const SET_USER_INFO = 'users-reducer/SET_USER_INFO';
const SET_IS_INFO_MODE = 'users-reducer/SET_IS_INFO_MODE';

const initialState = {
    userItems: null as UserItemType[] | null,
    repoItems: null as RepoItemType[] | null,
    selectedUserItem: null as UserItemType | null,
    selectedRepoItem: null as RepoItemType | null,
    userInfo: null as UserInfoType | null,
    isInfoMode: false
};

const usersReducer = (state = initialState, action: any): UsersReducerStateType => {
    switch (action.type) {
        case SET_USER_ITEMS:
            return {
                ...state,
                userItems: action.payload
            };
        case SET_REPO_ITEMS:
            return {
                ...state,
                repoItems: action.payload
            };
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUserItem: action.payload
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
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
    setRepoItems: (repos: RepoItemType[]) => ({
        type: SET_USER_ITEMS, payload: repos
    }),
    setSelectedUser: (user: UserItemType) => ({
        type: SET_SELECTED_USER, payload: user
    }),
    setUserInfo: (userInfo: UserInfoType) => ({
        type: SET_USER_INFO, payload: userInfo
    }),
    setIsInfoMode: (isInfoMode: boolean) => ({
        type: SET_IS_INFO_MODE, payload: isInfoMode
    })
};

export const getUserItems = (value: string) => async (dispatch: any) => {
    const data = await usersAPI.getUsers(value);
    dispatch(actions.setUserItems(data.items));
};

export const getRepoItems = (value: string) => async (dispatch: any) => {

};

export const getUserInfo = (value: string) => async (dispatch: any) => {
    const data = await usersAPI.getUserInfo(value);
    dispatch(actions.setUserInfo(data));
};

export default usersReducer;

type UsersReducerStateType = typeof initialState