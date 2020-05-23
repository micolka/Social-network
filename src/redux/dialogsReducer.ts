import { DialogType, MessagesType } from './../types/types';

const ADD_DIALOG_MESSAGE = 'myReactSocialNet/dialogsReducer/ADD-DIALOG-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Juan'},
        {id: 2, name: 'Pedro'},
        {id: 3, name: 'Ramona'},
        {id: 4, name: 'Fernandes'},
        {id: 5, name: 'Alexandro'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hola!'},
        {id: 2, message: 'Como te llama?'},
        {id: 3, message: 'Cerdo)'},
        {id: 4, message: 'Quiero salir a calle!'}
    ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState;



const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.postMessage}]
            };
        default:
            return state;
    }
};

type ActionsTypes = AddDialogMessageType;

type AddDialogMessageType = {
    type: typeof ADD_DIALOG_MESSAGE,
    postMessage: string
}

// Action creators. Создает экшены для вызова функций Dialogs
export const addDialogMessage = (text: string): AddDialogMessageType => ({type : ADD_DIALOG_MESSAGE, postMessage: text});

export default dialogsReducer;