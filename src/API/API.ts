import axios from "axios";
import { ProfileType } from "../types/types";

// Здесь мы делаем все запросы на сервак

// Настройка инстанса axios для последующего использования в функциях
const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "6a526b7b-f77a-432a-b7a4-40cad8b83d7b"
    }
});

type GetAuthMeType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {
      id: number
      email: string
      login: string
    }
}
type LoginMeType = {
    resultCode: ResultCodesEnum | CaptchaIsRequiredEnum
    messages: Array<string>
    data: {
        userId: number
    }
}
type ExitMeType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}
type GetCaptchaURLType = {
    url: string
}

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1,
}

export enum CaptchaIsRequiredEnum {
    CaptchaIsRequired = 10
}

export const AuthAPI = {
    // Функция получает с сервака данные о залогиненом пользователе
    getAuthMe () {
        return instance.get<GetAuthMeType>(`/auth/me`).then(response => response.data);
    },
    // Функция осуществляет логин на серваке и возвращает результат операции
    loginMe (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<LoginMeType>(`/auth/login`,
            {email, password, rememberMe, captcha}).then(response => response.data);
    },
    // Функция отлогинивает юзера с сервака и возвращает результат операции
    exitMe () {
        return instance.delete<ExitMeType>(`/auth/login`).then(response => response.data);
    },
    // Функция получает URL капчи для проверки безопасности
    getCaptchaURL () {
        return instance.get<GetCaptchaURLType>(`/security/get-captcha-url`).then(response => response.data);
    }
};

export const UsersAPI = {
    // Функция осущ запрос на сервер и получает информацию о пользователях
    // currentPage - номер страницы, pageSize - кол-во польз на странице
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    // Функция отписывается от Юзера с индексом id
    unfollowUser (id: number) {
        return instance.delete(`/follow/${id}`).then(response => response.data);
    },
    // Функция подписывается на Юзера с индексом id
    followUser (id: number) {
        return instance.post(`/follow/${id}`).then(response => response.data);
    },
    // Функция получает с сервака данные о профиле юзера (устарела)
    getProfile (id: number) {
        console.warn('Obsolete method. Please use ProfileAPI object.')
        return ProfileAPI.getProfile(id);
    }
};

export const ProfileAPI = {
    // Функция получает с сервака данные о профиле юзера по ID
    getProfile(id: number) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    // Функция получает с сервака статус юзера по ID
    getStatus(id: number) {
        return instance.get(`/profile/status/${id}`).then(response => response.data);
    },
    // Функция отправляют на сервер статус (status) залогиненного юзера
    updateStatus(status: string) {
        return instance.put(`/profile/status`, { status: status }).then(response => response.data);
    },
    // Функция отправляют на сервер аватарку залогиненного юзера
    saveProfilePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }    
        }).then(response => response.data);
    },
    // Функция отправляют на сервер объект с данными профиля на залогиненного юзера
    updateProfile(userProfile: ProfileType) {
        return instance.put(`/profile`, userProfile).then(response => response.data);
    }
};



