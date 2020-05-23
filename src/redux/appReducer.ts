import {authMeThunckCreator, SetAuthUserDataActionType} from "./authReducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { Dispatch } from "redux";

const SET_APP_INITIALISED = 'myReactSocialNet/appReducer/SET-APP-INITIALISED';

export type InitialStateType = {
    isInitialized: boolean
}

let initialState: InitialStateType = {
    isInitialized : false
};

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_APP_INITIALISED: {
            return  {
                ...state,
                isInitialized: true
            };
        }
        default: return state;
    }
};

type ActionsTypes = SetAppInitialisedType | SetAuthUserDataActionType;

type SetAppInitialisedType = {
    type: typeof SET_APP_INITIALISED
}
// Акшин для инициализации приложения на старте
export const setAppInitialised = (): SetAppInitialisedType => ({type: SET_APP_INITIALISED});

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;

// Санка инициализации приложения
export const setAppThunckCreator = (): ThunkType => {
    return (dispatch: DispatchType) => {
        // @ts-ignore
        let promise = dispatch(authMeThunckCreator());
        //let promise1 = dispatch(somethingElse());
        //let promise2 = dispatch(anythingElse());
        Promise.all([promise  /* ,promise1...*/]).then(() => {
            dispatch(setAppInitialised());
        });
    };
};

export default appReducer;