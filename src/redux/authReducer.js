import {AuthAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'myReactSocialNet/authReducer/SET-USER-DATA';
const CLEAR_USER_DATA = 'myReactSocialNet/authReducer/CLEAR-USER-DATA';
const SET_CAPTCHA_URL = 'myReactSocialNet/authReducer/SET-CAPTCHA-URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorised: false,
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
        case SET_CAPTCHA_URL: {
            return {...state, captchaURL: action.url}
        }
        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций authReducer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const clearAuthUserData = () => ({type: CLEAR_USER_DATA});
export const setCaptchaURL = (url) => ({type: SET_CAPTCHA_URL, url});

// Санка получения данных залогиненного пользователя
export const authMeThunckCreator = () => async (dispatch) => {
    let response = await AuthAPI.getAuthMe();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login));
    }
};

// Санка для логина на серваке
export const loginThunckCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.loginMe(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(authMeThunckCreator());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaThunckCreator());
        }
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Uncaught message!";
        // ошибка общая для формы
        dispatch(stopSubmit("loginForm", {_error: errorMessage}));
    }
};

// Санка для отлогинивания/отключения с сервака
export const exitThunckCreator = () => async (dispatch) => {
    let response = await AuthAPI.exitMe();
    if (response.resultCode === 0) {
        dispatch(clearAuthUserData());
    }
};

// Санка для получения капчи
export const getCaptchaThunckCreator = () => async (dispatch) => {
    let response = await AuthAPI.getCaptchaURL();
    dispatch(setCaptchaURL(response.url));
};

export default authReducer;