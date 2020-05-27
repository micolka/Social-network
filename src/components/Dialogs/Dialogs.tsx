import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {TextArea, createCustomField} from "../../utils/validators/customTextArea";
import { DialogType, MessagesType } from "../../types/types";
import { InitialStateType } from "../../redux/dialogsReducer";

type PropsType = {
    dialogsData: InitialStateType
    addDialogMessage: (messTxtValue: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    // данные для отрисовки списка чатов на странице Messages
    let formatedDialogData = props.dialogsData.dialogs.map((elem: DialogType) => {
        return <DialogItem name={elem.name} id={elem.id}/>;
    });
    // данные для отрисовки списка сообщений на странице Messages
    let formatedMessagesData = props.dialogsData.messages.map((elem: MessagesType) => {
        return <Message message={elem.message} id={elem.id}/>
    });

    // обработка события Send Message
    const onSubmit = (formData: SendMessageFormValuesType) => {
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

type SendMessageFormValuesType = {
    messTxtValue: string
}
type FormPropsType = {
}
type FormKeysType = Extract<keyof SendMessageFormValuesType, string>;

const SendMessageForm: React.FC<InjectedFormProps<SendMessageFormValuesType,
FormPropsType> & FormPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createCustomField<FormKeysType>("Say hello to momy!", "messTxtValue", TextArea, [requiredField, maxLength], s.inputMessage)}
        </div>
        <div>
            <button className={s.btnSendMessage}>Send</button>
        </div>
    </form>
};
                                            //  a unique name for the form
const SendMessageReduxForm = reduxForm<SendMessageFormValuesType, FormPropsType>({form: 'sendMessageForm'})(SendMessageForm);

export default Dialogs;