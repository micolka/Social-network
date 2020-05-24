import { APIResponseType, ResultCodesEnum, instance } from "./API";

type GetAuthMeDataType = {
    id: number
    email: string
    login: string
};
type LoginMeDataType = {
    userId: number
};
type GetCaptchaURLType = {
    url: string;
};
export enum CaptchaIsRequiredEnum {
    CaptchaIsRequired = 10
}

export const AuthAPI = {
    // Функция получает с сервака данные о залогиненом пользователе
    getAuthMe() {
        return instance.get<APIResponseType<GetAuthMeDataType>>(`/auth/me`).then(response => response.data);
    },
    // Функция осуществляет логин на серваке и возвращает результат операции
    loginMe(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginMeDataType, ResultCodesEnum | CaptchaIsRequiredEnum>>(`/auth/login`, { 
            email, password, rememberMe, captcha }).then(response => response.data);
    },
    // Функция отлогинивает юзера с сервака и возвращает результат операции
    exitMe() {
        return instance.delete<APIResponseType>(`/auth/login`).then(response => response.data);
    },
    // Функция получает URL капчи для проверки безопасности
    getCaptchaURL() {
        return instance.get<GetCaptchaURLType>(`/security/get-captcha-url`).then(response => response.data);
    }
};
