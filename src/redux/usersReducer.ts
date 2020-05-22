import { UserType } from './../types/types';
import {UsersAPI} from "../API/API";

const FOLLOW = 'myReactSocialNet/usersReducer/FOLLOW';
const UNFOLLOW = 'myReactSocialNet/usersReducer/UNFOLLOW';
const SET_USERS = 'myReactSocialNet/usersReducer/SET-USERS';
const SET_CURRENT_PAGE = 'myReactSocialNet/usersReducer/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'myReactSocialNet/usersReducer/SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'myReactSocialNet/usersReducer/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'myReactSocialNet/usersReducer/TOGGLE-IS-FOLLOWING-PROGRESS';

const updateObjectIbArray = (items: Array<UserType>, itemId: number, newObjProps: FollowedType): Array<UserType> => {
    return items.map(user => {
        if (user.id === itemId) {
            return {...user, ...newObjProps};
        }
        return user;
    });
};

type FollowedType = {
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingQueie: [] as Array<number>, // array of users ID's that are curently in progress of un\following
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectIbArray(state.users, action.userId, {followed: true} )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectIbArray(state.users, action.userId, {followed: false} )
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                    followingQueie: action.followingInProgress
                        ?  [...state.followingQueie, action.userId]
                        : state.followingQueie.filter( id => id !== action.userId )
                };
        default:
            return state;
    }
};

type FollowType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersType = { 
    type: typeof SET_USERS
    users: Array<UserType>
}
type SetCurrentPageType = { 
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountType = { 
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type ToggleIsFetchingType = { 
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleIsFollowingType = { 
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId: number
}
// Action creators. Создает экшены для вызова функций Profile
export const follow = (userId: number): FollowType => ({type: FOLLOW, userId: userId});
export const unfollow = (userId: number): UnfollowType => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number): ToggleIsFollowingType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId});

// Санка для получения списка юзеров на определенной странице
export const getUsersThunckCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    // Получаем с сервера информацию о юзерах
    let response = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, followAction: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    // Отписка от юзера
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(followAction(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

// Санка для отписки от юзера с возможностью блока кнопки
export const unfollowUserThunckCreator = (userId: number) =>  async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.unfollowUser.bind(UsersAPI), unfollow);
};

// Санка для подписки на юзера с возможностью блока кнопки
export const followUserThunckCreator = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.followUser.bind(UsersAPI), follow);
};

export default usersReducer;