import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

//Закидываем в стор редьюсеры
let reducersBunch = combineReducers( {
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    usersData: usersReducer,
    authData: authReducer
} );

let store = createStore(reducersBunch);

window.store = store;

export default store;