import {authMeThunckCreator} from "./authReducer";
import { InferActionsTypes, BaseThunkType } from "../types/types";

let initialState = {
    isInitialized : false
};

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'RSN/app/SET-APP-INITIALISED': {
            return  {
                ...state,
                isInitialized: true
            };
        }
        default: return state;
    }
};

type AppActionsTypes = InferActionsTypes<typeof appActions>;

// Акшин для инициализации приложения на старте
export const appActions = {
    setAppInitialised : () => ({type: 'RSN/app/SET-APP-INITIALISED'} as const)
}

type ThunkType = BaseThunkType<AppActionsTypes, void>;

// Санка инициализации приложения
export const setAppThunckCreator = (): ThunkType => {
    return (dispatch) => {
        let promise = dispatch(authMeThunckCreator());
        //let promise1 = dispatch(somethingElse());
        //let promise2 = dispatch(anythingElse());
        Promise.all([promise  /* ,promise1...*/]).then(() => {
            dispatch(appActions.setAppInitialised());
        });
    };
};

export default appReducer;