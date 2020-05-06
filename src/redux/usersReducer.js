import {UsersAPI} from "../API/API";

const FOLLOW = 'myReactSocialNet/usersReducer/FOLLOW';
const UNFOLLOW = 'myReactSocialNet/usersReducer/UNFOLLOW';
const SET_USERS = 'myReactSocialNet/usersReducer/SET-USERS';
const SET_CURRENT_PAGE = 'myReactSocialNet/usersReducer/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'myReactSocialNet/usersReducer/SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'myReactSocialNet/usersReducer/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'myReactSocialNet/usersReducer/TOGGLE-IS-FOLLOWING-PROGRESS';

const updateObjectIbArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps};
        }
        return user;
    });
};


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
                users: updateObjectIbArray(state.users, action.userId, "id", {followed: true} )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectIbArray(state.users, action.userId, "id", {followed: false} )
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
export const getUsersThunckCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    // Получаем с сервера информацию о юзерах
    let response = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, followAction) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    // Отписка от юзера
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(followAction(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

// Санка для отписки от юзера с возможностью блока кнопки
export const unfollowUserThunckCreator = (userId) =>  async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.unfollowUser.bind(UsersAPI), unfollow);
};

// Санка для подписки на юзера с возможностью блока кнопки
export const followUserThunckCreator = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.followUser.bind(UsersAPI), follow);
};

export default usersReducer;