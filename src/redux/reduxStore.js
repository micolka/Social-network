import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

//Закидываем в стор редьюсеры
let reducersBunch = combineReducers( {
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    usersData: usersReducer,
    authData: authReducer
} );

let store = createStore(reducersBunch, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;