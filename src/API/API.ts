import axios from "axios";
import { UserType } from "../types/types";

// Настройка инстанса axios для последующего использования в функциях
export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "6a526b7b-f77a-432a-b7a4-40cad8b83d7b"
    }
});

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1,
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
