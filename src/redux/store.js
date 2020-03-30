import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    // Объект данных
    _state : {
        profileData: {
            posts: [
                {id: 1, message: 'Hola! Como esta?', likeCount: 23},
                {id: 2, message: 'Que pasa aqui?', likeCount: 12},
                {id: 3, message: 'Vamos a la plalla', likeCount: 50},
                {id: 4, message: 'Quiero salir a calle!', likeCount: 2}
            ],
            textAreaValue: ''
        },
        dialogsData: {
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
        }
    },

    //Геттер для стейта
    getState () {
        return this._state;
    },

    _callSubscriber () {
        // console.log("State has been changed.")
    },

    // Мутный костыль, передающий каллбэк на рендер.
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    // Обработка всех колбеков. Изменяет объект _state
    dispatch(action) {
        this._state.dialogsData = dialogsReducer(this.getState().dialogsData, action);
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._callSubscriber( this._state );
    }
}

// Какой-то костыль для просмотра содержимого state в консоли
window.store = store;

export default store;