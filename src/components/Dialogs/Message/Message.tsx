import React from "react";
import s from '../Dialogs.module.css';

export type MessageType = {
    id: number
    message: string
}
const Message: React.FC<MessageType> = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;