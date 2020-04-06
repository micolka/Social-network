import {UsersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingQueie: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
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
                        ?  [...state.followingQueie, action.UserID]
                        : state.followingQueie.filter( id => id !== action.UserID )
                };
        default:
            return state;
    }
};

// Action creators. Создает экшены для вызова функций Profile
export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleIsFollowingProgress = (followingInProgress, UserID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, UserID});

// Санка для получения списка юзеров на определенной странице
export const getUsersThunckCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        // Получаем с сервера информацию о юзерах
        UsersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
            });
    };
};

// Санка для отписки от юзера с возможностью блока кнопки
export const unfollowUserThunckCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        // Отписка от юзера
        UsersAPI.unfollowUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};

// Санка для подписки на юзера с возможностью блока кнопки
export const followUserThunckCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        // Отписка от юзера
        UsersAPI.followUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};

export default usersReducer;