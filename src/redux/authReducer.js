import {AuthAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const CLEAR_USER_DATA = 'CLEAR-USER-DATA';
const SET_AUTH_PROCESSING = 'SET-AUTH-PROCESSING';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorised: false,
    isAuthInProcess: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.data,
                isAuthorised: true
            };
        }
        case CLEAR_USER_DATA: {
            return  {
                userId: null,
                email: null,
                login: null,
                isAuthorised: false
            };
        }
        case SET_AUTH_PROCESSING: {
            return {...state,isAuthInProcess: action.inProcess};
        }
        case SET_CAPTCHA_URL: {
            return {...state, captchaURL: action.url}
        }
        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций authReducer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const clearAuthUserData = () => ({type: CLEAR_USER_DATA});
export const setAuthInProcess = (inProcess) => ({type: SET_AUTH_PROCESSING, inProcess});
export const setCaptchaURL = (url) => ({type: SET_CAPTCHA_URL, url});

// Санка получения данных залогиненного пользователя
export const authMeThunckCreator = () => {
    return (dispatch) => {
        dispatch(setAuthInProcess(true));
        AuthAPI.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
            dispatch(setAuthInProcess(false));
        });
    };
};

// Санка для логина на серваке
export const loginThunckCreator = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        dispatch(setAuthInProcess(true));
        AuthAPI.loginMe(email, password, rememberMe, captcha).then(response => {
            if (response.resultCode === 0) {
                dispatch(authMeThunckCreator());
            }
            else {
                if (response.resultCode === 10) {
                    dispatch(getCaptchaThunckCreator());
                }
                let errorMessage = response.messages.length > 0 ? response.messages[0] : "Uncaught message!";
                // ошибка общая для формы
                dispatch(stopSubmit("loginForm", {_error: errorMessage}));
            }
            dispatch(setAuthInProcess(false));
        });
    };
};

// Санка для отлогинивания/отключения с сервака
export const exitThunckCreator = () => {
    return (dispatch) => {
        dispatch(setAuthInProcess(true));
        AuthAPI.exitMe().then(response => {
            if (response.resultCode === 0) {
                dispatch(clearAuthUserData());
            }
            dispatch(setAuthInProcess(false));
        });
    };
};

// Санка для получения капчи
export const getCaptchaThunckCreator = () => {
    return (dispatch) => {
        AuthAPI.getCaptchaURL().then(response => {
            dispatch(setCaptchaURL(response.url));
        });
    };
};
export default authReducer;