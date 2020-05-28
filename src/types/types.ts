import { AppStateType } from "../redux/reduxStore"
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

// Types from profileReducer
export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}

// Types from userdsReducer
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}

// Types from dialogsReducer
export type DialogType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

// Common types for Reducers
 type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
 export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>; 

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;