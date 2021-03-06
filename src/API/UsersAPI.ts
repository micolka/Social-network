import { instance, GetItemsType, APIResponseType } from "./API";

export const UsersAPI = {
    // Функция осущ запрос на сервер и получает информацию о пользователях
    // currentPage - номер страницы, pageSize - кол-во польз на странице
    getUsers(currentPage = 1, pageSize = 10, friend: boolean | undefined = undefined,term: string = "") {
        //return instance.get<GetItemsType>(`/users?page=${currentPage}&count=${pageSize}&friend=true`)
        return instance.get<GetItemsType>(`/users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
            .then(response => response.data);
    },
    // Функция отписывается от Юзера с индексом id
    unfollowUser(id: number) {
        return instance.delete<APIResponseType>(`/follow/${id}`).then(response => response.data);
    },
    // Функция подписывается на Юзера с индексом id
    followUser(id: number) {
        return instance.post<APIResponseType>(`/follow/${id}`).then(response => response.data);
    }
};
