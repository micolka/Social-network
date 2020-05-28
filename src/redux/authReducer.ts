import {ResultCodesEnum} from "../API/API";
import { AuthAPI, CaptchaIsRequiredEnum } from "../API/AuthAPI";
import {stopSubmit} from "redux-form";
import { InferActionsTypes, BaseThunkType } from "../types/types";
import { usersActions, UsersActionsTypes } from "./usersReducer";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuthorised: false,
    captchaURL: null as string | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'RSN/auth/SET-USER-DATA': {
            return  {
                ...state,
                ...action.data,
                isAuthorised: true
            };
        }
        case 'RSN/auth/CLEAR-USER-DATA': {
            return  {
                userId: null,
                email: null,
                login: null,
                isAuthorised: false,
                captchaURL: null
            };
        }
        case 'RSN/auth/SET-CAPTCHA-URL': {
            return {...state, captchaURL: action.url}
        }
        default: return state;
    }
};

type AuthActionsTypes = InferActionsTypes<typeof authActions> | UsersActionsTypes;

// Action creators. Создает экшены для вызова функций authReducer
export const authActions = {
    setAuthUserData: (userId: number, email: string, login: string) => ({
        type: 'RSN/auth/SET-USER-DATA', data: { userId, email, login }} as const),
    clearAuthUserData: () => ({ type: 'RSN/auth/CLEAR-USER-DATA' } as const),
    setCaptchaURL: (url: string) => ({ type: 'RSN/auth/SET-CAPTCHA-URL', url} as const)
}

type ThunkType = BaseThunkType<AuthActionsTypes>;

// Санка получения данных залогиненного пользователя
export const authMeThunckCreator = (): ThunkType => async (dispatch) => {
    let response = await AuthAPI.getAuthMe();
    if (response.resultCode === ResultCodesEnum.Succes) {
        let {id, login, email} = response.data;
        dispatch(authActions.setAuthUserData(id, email, login));
    }
};

// Санка для логина на серваке
export const loginThunckCreator = (email: string, password: string, 
    rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let response = await AuthAPI.loginMe(email, password, rememberMe, captcha);
    if (response.resultCode === ResultCodesEnum.Succes) {
        dispatch(authMeThunckCreator());
    } else {
        if (response.resultCode === CaptchaIsRequiredEnum.CaptchaIsRequired) {
            dispatch(getCaptchaThunckCreator());
        }
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Uncaught message!";
        // ошибка общая для формы
        dispatch(stopSubmit("loginForm", {_error: errorMessage}));
    }
};

// Санка для отлогинивания/отключения с сервака
export const exitThunckCreator = (): ThunkType => async (dispatch) => {
    let response = await AuthAPI.exitMe();
    if (response.resultCode === ResultCodesEnum.Succes) {
        // Сброс всех параметров
        dispatch(authActions.clearAuthUserData());
        dispatch(usersActions.setCurrentPage(1));
        dispatch(usersActions.setUsersFilter(false, true));
    }
};

// Санка для получения капчи
export const getCaptchaThunckCreator = (): ThunkType => async (dispatch) => {
    let response = await AuthAPI.getCaptchaURL();
    dispatch(authActions.setCaptchaURL(response.url));
};

export default authReducer;