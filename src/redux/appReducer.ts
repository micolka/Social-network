import {authMeThunckCreator} from "./authReducer";

const SET_APP_INITIALISED = 'myReactSocialNet/appReducer/SET-APP-INITIALISED';

export type InitialStateType = {
    isInitialized: boolean
}

type SetAppInitialisedType = {
    type: typeof SET_APP_INITIALISED
}

let initialState: InitialStateType = {
    isInitialized : false
};

const appReducer = (state = initialState, action: SetAppInitialisedType): InitialStateType => {
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

// Акшин для инициализации приложения на старте
export const setAppInitialised = (): SetAppInitialisedType => ({type: SET_APP_INITIALISED});

// Санка инициализации приложения
export const setAppThunckCreator = () => {
    return (dispatch: any) => {
        let promise = dispatch(authMeThunckCreator());
        //let promise1 = dispatch(somethingElse());
        //let promise2 = dispatch(anythingElse());
        Promise.all([promise  /* ,promise1...*/]).then(() => {
            dispatch(setAppInitialised());
        });
    };
};

export default appReducer;