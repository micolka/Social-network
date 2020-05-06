import {ProfileAPI, UsersAPI} from "../API/API";
import {toggleIsFetching} from "./usersReducer";

const ADD_POST = 'myReactSocialNet/profileReducer/ADD-POST';
const SET_USER_PROFILE = 'myReactSocialNet/profileReducer/SET-USER-PROFILE';
const SET_STATUS = 'myReactSocialNet/profileReducer/SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hola! Como esta?', likeCount: 23},
        {id: 2, message: 'Que pasa aqui?', likeCount: 12},
        {id: 3, message: 'Vamos a la plalla', likeCount: 50},
        {id: 4, message: 'Quiero salir a calle!', likeCount: 2}
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, message: action.postMessage, likeCount: 0}],
                textAreaValue:''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций Profile
export const addPost = (text) => ({type: ADD_POST,postMessage: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// Санка для получения инфы о выбранном юзере
export const showUserProfileThunckCreator = (UserID) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await UsersAPI.getProfile(UserID);
    dispatch(setUserProfile(response));
    dispatch(toggleIsFetching(false));

};

// Санка для получения статуса пользователя с сервака
export const getStatusThunckCreator = (UserID) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await ProfileAPI.getStatus(UserID)
    dispatch(setStatus(response));
    dispatch(toggleIsFetching(false));
};


// Санка для обновления статуса пользователя на серваке
export const updateStatusThunckCreator = (status) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await ProfileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
        dispatch(toggleIsFetching(false));
    }
};

export default profileReducer;