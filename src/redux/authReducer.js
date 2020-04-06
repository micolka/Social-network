import {AuthAPI} from "../API/API";

const SET_USER_DATA = 'SET-USER-DATA';

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

        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций authReducer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

// Санка логина в хеадере
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

export default authReducer;