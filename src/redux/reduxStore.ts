import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

//Закидываем в стор редьюсеры
let rootReducer = combineReducers( {
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    usersData: usersReducer,
    authData: authReducer,
    appData: appReducer,
    form: formReducer
} );

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducersBunch, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;