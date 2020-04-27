import {authMeThunckCreator} from "./authReducer";

const SET_APP_INITIALISED = 'SET-APP-INITIALISED';

let initialState = {
    isInitialized : false
};

const appReducer = (state = initialState, action) => {
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
export const setAppInitialised = () => ({type: SET_APP_INITIALISED});

// Санка инициализации приложения
export const setAppThunckCreator = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunckCreator());
        //let promise1 = dispatch(somethingElse());
        //let promise2 = dispatch(anythingElse());
        Promise.all([promise  /* ,promise1...*/]).then(() => {
            dispatch(setAppInitialised());
        });
    };
};

export default appReducer;