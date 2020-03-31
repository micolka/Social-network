import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";


const Dialogs = (props) => {
    // создание тегов на основе полученных данных
    let formatedDialogData = props.dialogsData.dialogs.map((elem) => {
        return <DialogItem name={elem.name} id={elem.id}/>;
    });
    let formatedMessagesData = props.dialogsData.messages.map((elem) => {
        return <Message message={elem.message}/>
    });

    // Ссылка на TextArea
    let sendMessageElement = React.createRef();
    // Функция-обработчик нажатия на button
    let butSendClick = () => {
        props.addDialogMessage();
    };

    let updateMessageArea = () => {
        let text = sendMessageElement.current.value;
        props.updateDialogMessageArea(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {formatedDialogData}
            </div>
            <div className={s.messages}>
                {formatedMessagesData}
                <div>
                    <textarea ref={sendMessageElement} onChange={updateMessageArea}
                              value={props.dialogsData.dialogTextValue} placeholder={'Say hello to dady!'}></textarea>
                </div>
                <div>
                    <button onClick={butSendClick}>Send</button>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;