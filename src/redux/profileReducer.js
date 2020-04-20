import {ProfileAPI, UsersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
//export const updatePostArea = (text) => ({type: UPDATE_POST_AREA, postMessage: text});

// Санка для получения инфы о выбранном юзере
export const showUserProfileThunckCreator = (UserID) => {
    return (dispatch) => {
        UsersAPI.getProfile(UserID).then(response => {
            dispatch(setUserProfile(response));
        });
    };
};

// Санка для получения статуса пользователя с сервака
export const getStatusThunckCreator = (UserID) => {
    return (dispatch) => {
        ProfileAPI.getStatus(UserID).then(response => {
            dispatch(setStatus(response));
        });
    };
};

// Санка для обновления статуса пользователя на серваке
export const updateStatusThunckCreator = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};

export default profileReducer;