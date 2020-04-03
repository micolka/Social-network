import * as axios from "axios";

// Здесь мы делаем все запросы на сервак

// Настройка инстанса axios для последующего использования в функциях
const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "6a526b7b-f77a-432a-b7a4-40cad8b83d7b"
    }
});


export const UsersAPI = {
    // Функция осущ запрос на сервер и получает информацию о пользователях
    // currentPage - номер страницы, pageSize - кол-во польз на странице
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },

    // Функция получает с сервака о залогиненом пользователе
    getAuthMe () {
        return instance.get(`/auth/me`).then(response => response.data);
    },

    // Функция отписывается от Юзера с индексом id
    unfollowUser (id) {
        return instance.delete(`/follow/${id}`).then(response => response.data);
    },

    // Функция подписывается на Юзера с индексом id
    followUser (id) {
        return instance.post(`/follow/${id}`).then(response => response.data);
    },

};



