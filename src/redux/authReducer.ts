import {AuthAPI, ResultCodesEnum, CaptchaIsRequiredEnum} from "../API/API";
import {stopSubmit} from "redux-form";
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { AppStateType } from './reduxStore';

const SET_USER_DATA = 'myReactSocialNet/authReducer/SET-USER-DATA';
const CLEAR_USER_DATA = 'myReactSocialNet/authReducer/CLEAR-USER-DATA';
const SET_CAPTCHA_URL = 'myReactSocialNet/authReducer/SET-CAPTCHA-URL';

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuthorised: boolean,
    captchaURL: string | null
};

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuthorised: false,
    captchaURL: null
};

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
                isAuthorised: false,
                captchaURL: null
            };
        }
        case SET_CAPTCHA_URL: {
            return {...state, captchaURL: action.url}
        }
        default: return state;
    }
};

type ActionsTypes = SetAuthUserDataActionType | ClearAuthUserDataActionType | SetCaptchaURLActionType;

type SetAuthUserDataActionDataType = {
    userId: number
    email: string
    login: string
}
export type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA, 
    data: SetAuthUserDataActionDataType
};

type ClearAuthUserDataActionType = {
    type: typeof CLEAR_USER_DATA
};

type SetCaptchaURLActionType = {
    type: typeof SET_CAPTCHA_URL 
    url: string
};

// Action creators. Создает экшены для вызова функций authReducer
export const setAuthUserData = (userId: number, email: string, login: string): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, data: {userId, email, login}});
export const clearAuthUserData = (): ClearAuthUserDataActionType => ({type: CLEAR_USER_DATA});
export const setCaptchaURL = (url: string): SetCaptchaURLActionType  => ({type: SET_CAPTCHA_URL, url});


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;

// Санка получения данных залогиненного пользователя
export const authMeThunckCreator = (): ThunkType => async (dispatch: DispatchType) => {
    let response = await AuthAPI.getAuthMe();
    if (response.resultCode === ResultCodesEnum.Succes) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login));
    }
};

// Санка для логина на серваке
export const loginThunckCreator = (email: string, password: string, 
    rememberMe: boolean, captcha: string): ThunkType => async (dispatch: DispatchType) => {
    let response = await AuthAPI.loginMe(email, password, rememberMe, captcha);
    if (response.resultCode === ResultCodesEnum.Succes) {
        // @ts-ignore
        dispatch(authMeThunckCreator());
    } else {
        if (response.resultCode === CaptchaIsRequiredEnum.CaptchaIsRequired) {
            // @ts-ignore
            dispatch(getCaptchaThunckCreator());
        }
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Uncaught message!";
        // ошибка общая для формы
        dispatch(stopSubmit("loginForm", {_error: errorMessage}));
    }
};

// Санка для отлогинивания/отключения с сервака
export const exitThunckCreator = (): ThunkType => async (dispatch: DispatchType) => {
    let response = await AuthAPI.exitMe();
    if (response.resultCode === ResultCodesEnum.Succes) {
        dispatch(clearAuthUserData());
    }
};

// Санка для получения капчи
export const getCaptchaThunckCreator = (): ThunkType => async (dispatch: DispatchType) => {
    let response = await AuthAPI.getCaptchaURL();
    dispatch(setCaptchaURL(response.url));
};

export default authReducer;