import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {TextArea} from "../../utils/validators/customTextArea";


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

let maxLength = maxLengthCreator(100);

const SendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Say hello to momy!'} name={"messTxtValue"}
                   component={TextArea} validate={[requiredField, maxLength]} className={s.inputMessage}/>
        </div>
        <div>
            <button className={s.btnSendMessage}>Send</button>
        </div>
    </form>
};
                                            //  a unique name for the form
const SendMessageReduxForm = reduxForm({form: 'sendMessageForm'})(SendMessageForm);

export default Dialogs;