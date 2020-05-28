import { UserType, InferActionsTypes, BaseThunkType } from './../types/types';
import { UsersAPI } from "../API/UsersAPI";
import { Dispatch } from 'redux';

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
    filterProps: {
        currentPage: 1,
        friend: false,
        allUsers: true
    },
    isFetching: false,
    followingQueie: [] as Array<number>, // array of users ID's that are curently in progress of un\following
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'RSN/users/FOLLOW':
            return {
                ...state,
                users: updateObjectIbArray(state.users, action.userId, {followed: true} )
            };
        case 'RSN/users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectIbArray(state.users, action.userId, {followed: false} )
            };
        case 'RSN/users/SET-USERS':
            return {...state, users: action.users};
        case 'RSN/users/SET-CURRENT-PAGE':
            return {...state, 
                    filterProps: {...state.filterProps,  currentPage: action.currentPage}
            };
        case 'RSN/users/SET-USERS-FILTER':
            return {
                ...state,
                filterProps: {...state.filterProps, friend: action.friend, allUsers: action.allUsers}
            };
        case 'RSN/users/SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount};
        case 'RSN/users/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'RSN/users/TOGGLE-IS-FOLLOWING-PROGRESS':
            return {...state,
                    followingQueie: action.followingInProgress
                        ?  [...state.followingQueie, action.userId]
                        : state.followingQueie.filter( id => id !== action.userId )
                };
        default:
            return state;
    }
};

export type UsersActionsTypes = InferActionsTypes<typeof usersActions>;

// Action creators. Создает экшены для вызова функций Profile
export const usersActions = {
    follow : (userId: number) => ({type: 'RSN/users/FOLLOW', userId: userId} as const),
    unfollow : (userId: number) => ({type: 'RSN/users/UNFOLLOW', userId: userId} as const),
    setUsers : (users: Array<UserType>) => ({type: 'RSN/users/SET-USERS', users: users} as const),
    setCurrentPage : (currentPage: number) => ({type: 'RSN/users/SET-CURRENT-PAGE', currentPage: currentPage} as const),
    setUsersFilter : (friend: boolean, allUsers: boolean) => ({type: 'RSN/users/SET-USERS-FILTER', friend, allUsers} as const),
    setTotalUsersCount : (totalCount: number) => ({type: 'RSN/users/SET-USERS-TOTAL-COUNT', totalUsersCount: totalCount} as const),
    toggleIsFetching : (isFetching: boolean) => ({type: 'RSN/users/TOGGLE-IS-FETCHING', isFetching: isFetching} as const),
    toggleIsFollowingProgress : (followingInProgress: boolean, userId: number) => ({
        type: 'RSN/users/TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress, userId} as const)
}

type ThunkType = BaseThunkType<UsersActionsTypes>;
type DispatchType = Dispatch<UsersActionsTypes>;

// Санка для получения списка юзеров на определенной странице
export const getUsersThunckCreator = (currentPage: number, pageSize: number, friend?: boolean,  term?: string): ThunkType =>
    async (dispatch) => {
        dispatch(usersActions.toggleIsFetching(true));
        // Получаем с сервера информацию о юзерах
        let response = await UsersAPI.getUsers(currentPage, pageSize, friend, term);      
        dispatch(usersActions.setUsers(response.items));
        dispatch(usersActions.setTotalUsersCount(response.totalCount));
        dispatch(usersActions.toggleIsFetching(false));
    };

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
    followAction: (userId: number) => (UsersActionsTypes)) => {
    dispatch(usersActions.toggleIsFetching(true));
    dispatch(usersActions.toggleIsFollowingProgress(true, userId));
    // Отписка от юзера
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(followAction(userId));
    }
    dispatch(usersActions.toggleIsFollowingProgress(false, userId));
    dispatch(usersActions.toggleIsFetching(false));
};

// Санка для отписки от юзера с возможностью блока кнопки
export const unfollowUserThunckCreator = (userId: number): ThunkType =>  async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, UsersAPI.unfollowUser.bind(UsersAPI), usersActions.unfollow);
};

// Санка для подписки на юзера с возможностью блока кнопки
export const followUserThunckCreator = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, UsersAPI.followUser.bind(UsersAPI), usersActions.follow);
};

export default usersReducer;