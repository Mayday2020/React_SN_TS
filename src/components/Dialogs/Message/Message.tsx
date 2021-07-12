import React from "react";
import s from '../Dialogs.module.css';
import {MessageType} from "../../../Redux/store";


const Message: React.FC<MessageType> = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;