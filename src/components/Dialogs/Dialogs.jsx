import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    // Если не в системе переход на страницу логина
    if (!props.isAuth) return <Redirect to={"/login"}/>;

    // данные для отрисовки списка чатов на странице Messages
    let formatedDialogData = props.dialogsData.dialogs.map((elem) => {
        return <DialogItem name={elem.name} id={elem.id}/>;
    });
    // данные для отрисовки списка сообщений на странице Messages
    let formatedMessagesData = props.dialogsData.messages.map((elem) => {
        return <Message message={elem.message} id={elem.id}/>
    });

    // обработка события Send Message
    const onSubmit = (formData) => {
        let {messTxtValue} = formData;
        props.addDialogMessage(messTxtValue);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {formatedDialogData}
            </div>
            <div className={s.messages}>
                {formatedMessagesData}
                <SendMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

const SendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Say hello to momy!'} name={"messTxtValue"} component={"textarea"}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
};
                                            //  a unique name for the form
const SendMessageReduxForm = reduxForm({form: 'sendMessageForm'})(SendMessageForm);

export default Dialogs;