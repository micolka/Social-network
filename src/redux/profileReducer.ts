import { ProfileType, PhotosType, PostType } from './../types/types';
import {ProfileAPI, UsersAPI} from "../API/API";
import {toggleIsFetching, ToggleIsFetchingType} from "./usersReducer";
import {stopSubmit} from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { Dispatch } from "redux";


const ADD_POST = 'myReactSocialNet/profileReducer/ADD-POST';
const SET_USER_PROFILE = 'myReactSocialNet/profileReducer/SET-USER-PROFILE';
const SET_STATUS = 'myReactSocialNet/profileReducer/SET-STATUS';
const SET_USER_PHOTO = 'myReactSocialNet/profileReducer/SET-USER-PHOTO';



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

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, message: action.postMessage, likeCount: 0}],
                textAreaValue:''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }
        default: return state;
    }
};

type ActionsTypes = AddPostType | SetUserProfileType | SetStatusType | SetUserPhotoType | ToggleIsFetchingType;

type AddPostType = {
    type: typeof ADD_POST,
    postMessage: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

type SetUserPhotoType = {
    type: typeof SET_USER_PHOTO
    photos: PhotosType
}

// Action creators. Создает экшены для вызова функций Profile
export const addPost = (text: string): AddPostType => ({type: ADD_POST, postMessage: text});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const setUserPhoto = (photos: PhotosType): SetUserPhotoType => ({type: SET_USER_PHOTO, photos});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;

// Санка для получения инфы о выбранном юзере
export const showUserProfileThunckCreator = (UserID: number): ThunkType => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await UsersAPI.getProfile(UserID);
    dispatch(setUserProfile(response));
    dispatch(toggleIsFetching(false));

};

// Санка для обновления данных профиля пользователя на серваке
export const updateProfileThunckCreator = (userProfile: ProfileType, UserID: number): ThunkType => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true));
    const response = await ProfileAPI.updateProfile(userProfile)
    if (response.resultCode === 0) {
        // @ts-ignore
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
    dispatch(toggleIsFetching(false));
};

// Санка для получения статуса пользователя с сервака
export const getStatusThunckCreator = (UserID: number): ThunkType => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true));
    const response = await ProfileAPI.getStatus(UserID)
    dispatch(setStatus(response));
    dispatch(toggleIsFetching(false));
};

// Санка для обновления статуса пользователя на серваке
export const updateStatusThunckCreator = (status: string): ThunkType => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true));
    try {
        const response = await ProfileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status));   
        }
        if (response.resultCode === 1){
            console.log("mas length 300");           
        }
    }
    catch(error) {
        console.log("some err");
    }
    dispatch(toggleIsFetching(false));
};

// Санка для обновления фотки пользователя на серваке
export const saveProfilePhotoThunckCreator = (file: any): ThunkType => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true));
    const response = await ProfileAPI.saveProfilePhoto(file)
    if (response.resultCode === 0) {
        dispatch(setUserPhoto(response.data.photos))
        dispatch(toggleIsFetching(false));
    }
};


export default profileReducer;