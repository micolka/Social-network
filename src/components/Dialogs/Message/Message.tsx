import React from "react";
import s from './Message.module.css'

type PropsType = {
    message: string
    id: number
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>
            <img
                src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' alt="ninja"></img>
            <span>{props.message}</span>
        </div>
    );
}

export default Message;