const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE_AREA = 'UPDATE-DIALOG-MESSAGE-AREA';

let initialState = {
    dialogs: [
        {id: 1, name: 'Juan'},
        {id: 2, name: 'Pedro'},
        {id: 3, name: 'Ramona'},
        {id: 4, name: 'Fernandes'},
        {id: 5, name: 'Alexandro'}
    ],
    dialogTextValue: '',
    messages: [
        {id: 1, message: 'Hola!'},
        {id: 2, message: 'Como te llama?'},
        {id: 3, message: 'Cerdo)'},
        {id: 4, message: 'Quiero salir a calle!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.dialogTextValue}],
                dialogTextValue: ''
            };
        case UPDATE_DIALOG_MESSAGE_AREA:
            return {
                ...state,
                dialogTextValue: action.postMessage
            };
        default:
            return state;
    }
};

// Action creators. Создает экшены для вызова функций Dialogs
export const addDialogMessage = () => ({type : ADD_DIALOG_MESSAGE});
export const updateDialogMessageArea = (text) => ({type: UPDATE_DIALOG_MESSAGE_AREA, postMessage: text});

export default dialogsReducer;