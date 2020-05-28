import { ProfileType, PhotosType, PostType, InferActionsTypes, BaseThunkType } from './../types/types';
import { ProfileAPI } from "../API/ProfileAPI";
import {usersActions, UsersActionsTypes} from "./usersReducer";
import {stopSubmit} from "redux-form";

let initialState = {
    posts: [
        {id: 1, message: 'Hola! Como esta?', likeCount: 23},
        {id: 2, message: 'Que pasa aqui?', likeCount: 12},
        {id: 3, message: 'Vamos a la plalla', likeCount: 50},
        {id: 4, message: 'Quiero salir a calle!', likeCount: 2}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    textAreaValue: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'RSN/profile/ADD-POST': {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, message: action.postMessage, likeCount: 0}],
                textAreaValue:''
            };
        }
        case 'RSN/profile/SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'RSN/profile/SET-STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        case 'RSN/profile/SET-USER-PHOTO': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }
        case "RSN/profile/CLEAR-USER-PROFILE": {
            return {
                ...state,
                profile: null
            }
        }
        default: return state;
    }
};

type ProfileActionsTypes = InferActionsTypes<typeof profileActions> | UsersActionsTypes;

// Action creators. Создает экшены для вызова функций Profile
export const profileActions = {
    addPost: (text: string) => ({type: 'RSN/profile/ADD-POST', postMessage: text} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'RSN/profile/SET-USER-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'RSN/profile/SET-STATUS', status} as const),
    setUserPhoto: (photos: PhotosType) => ({type: 'RSN/profile/SET-USER-PHOTO', photos} as const),
    clearUserProfile: () => ({type: 'RSN/profile/CLEAR-USER-PROFILE'} as const)
}

type ThunkType = BaseThunkType<ProfileActionsTypes>;

// Санка для получения инфы о выбранном юзере
export const showUserProfileThunckCreator = (UserID: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    const response = await ProfileAPI.getProfile(UserID);
    dispatch(profileActions.setUserProfile(response));
    dispatch(usersActions.toggleIsFetching(false));

};

// Санка для обновления данных профиля пользователя на серваке
export const updateProfileThunckCreator = (userProfile: ProfileType, UserID: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    const response = await ProfileAPI.updateProfile(userProfile)
    if (response.resultCode === 0) {
        dispatch(showUserProfileThunckCreator(UserID));
    }
    else if (response.resultCode === 1) {
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Uncaught message!";
        // ошибка общая для формы
        // @ts-ignore
       dispatch(stopSubmit("editProfileForm", { _error: errorMessage }));
        //dispatch(stopSubmit("editProfileForm", { "contacts": {"facebook": errorMessage }})); - распарсить ошибку
        return Promise.reject(errorMessage);
    }
    dispatch(usersActions.toggleIsFetching(false));
};

// Санка для получения статуса пользователя с сервака
export const getStatusThunckCreator = (UserID: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    const response = await ProfileAPI.getStatus(UserID)
    dispatch(profileActions.setStatus(response));
    dispatch(usersActions.toggleIsFetching(false));
};

// Санка для обновления статуса пользователя на серваке
export const updateStatusThunckCreator = (status: string): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    try {
        const response = await ProfileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(profileActions.setStatus(status));   
        }
        if (response.resultCode === 1){
            console.log("mas length 300");           
        }
    }
    catch(error) {
        console.log("some err");
    }
    dispatch(usersActions.toggleIsFetching(false));
};

// Санка для обновления фотки пользователя на серваке
export const saveProfilePhotoThunckCreator = (file: File): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    const response = await ProfileAPI.saveProfilePhoto(file)
    if (response.resultCode === 0) {
        dispatch(profileActions.setUserPhoto(response.data.photos))
        dispatch(usersActions.toggleIsFetching(false));
    }
};


export default profileReducer;