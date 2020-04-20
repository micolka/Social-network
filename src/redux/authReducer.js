import {AuthAPI} from "../API/API";

const SET_USER_DATA = 'SET-USER-DATA';
const CLEAR_USER_DATA = 'CLEAR-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorised: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.data,
                isAuthorised: true
            };
        }
        case CLEAR_USER_DATA: {
            return  {
                userId: null,
                email: null,
                login: null,
                isAuthorised: false,
                isSuccessful: false
            };
        }
        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций authReducer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const clearAuthUserData = () => ({type: CLEAR_USER_DATA});

// Санка получения данных залогиненного пользователя
export const authMeThunckCreator = () => {
    return (dispatch) => {
        AuthAPI.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    };
};

// Санка для логина на серваке
export const loginThunckCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthAPI.loginMe(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                AuthAPI.getAuthMe().then(response => {
                    if (response.resultCode === 0) {
                        let {id, login, email} = response.data;
                        dispatch(setAuthUserData(id, email, login));
                    }
                });
            }
        });
    };
};

// Санка для отлогинивания/отключения с сервака
export const exitThunckCreator = () => {
    return (dispatch) => {
        AuthAPI.exitMe().then(response => {
            if (response.resultCode === 0) {
                dispatch(clearAuthUserData());
            }
        });
    };
};
export default authReducer;