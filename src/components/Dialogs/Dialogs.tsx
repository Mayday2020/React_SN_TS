import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message  from "./Message/Message";
import {DialogItemType, MessageType} from "../../Redux/store";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogItemType[],
        messages: MessageType[]
        newMessageBody: string
    }
    isAuth: boolean
    updateNewMessageBody: (text: string)=> void
    sendMessage: (textMessage: string)=> void
}

const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage(newMessageBody)
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div className={s.dialogsUI}>
                        <div>
                            <textarea className={s.dialogsTextarea}
                                      value={newMessageBody}
                                      placeholder={'Enter your message'}
                                      onChange={onNewMessageChange} />
                        </div>
                        <div>
                            <button className={s.buttonSendMessage} onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Dialogs;