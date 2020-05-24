import { DialogType, MessagesType, InferActionsTypes } from './../types/types';

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

const dialogsReducer = (state = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'RSN/dialogs/ADD-DIALOG-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.postMessage}]
            };
        default:
            return state;
    }
};

type DialogsActionsTypes = InferActionsTypes<typeof dialogsActions>;;

// Action creators. Создает экшены для вызова функций Dialogs
export const dialogsActions = {
    addDialogMessage: (text: string) => ({ type: 'RSN/dialogs/ADD-DIALOG-MESSAGE', postMessage: text } as const)
}

export default dialogsReducer;