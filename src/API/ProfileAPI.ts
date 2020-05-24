import { ProfileType, PhotosType } from "../types/types";
import { instance, APIResponseType } from "./API";

type PhotoDataType = {
    photos: PhotosType
}

export const ProfileAPI = {
    // Функция получает с сервака данные о профиле юзера по ID
    getProfile(id: number) {
        return instance.get<ProfileType>(`profile/${id}`).then(response => response.data);
    },
    // Функция получает с сервака статус юзера по ID
    getStatus(id: number) {
        return instance.get<string>(`/profile/status/${id}`).then(response => response.data);
    },
    // Функция отправляют на сервер статус (status) залогиненного юзера
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`/profile/status`, { status: status }).then(response => response.data);
    },
    // Функция отправляют на сервер аватарку залогиненного юзера
    saveProfilePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<APIResponseType<PhotoDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    // Функция отправляют на сервер объект с данными профиля на залогиненного юзера
    updateProfile(userProfile: ProfileType) {
        return instance.put<APIResponseType>(`/profile`, userProfile).then(response => response.data);
    }
};
