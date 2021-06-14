import React from "react";
import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";

type DialogsPropsType = {
    dialogs: {
        users: DialogItemType[],
        messages: MessageType[]
    }
}
const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.users.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogs.messages.map(m => <Message id={m.id} message={m.message}/>)
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        </main>
    )
}
export default Dialogs;