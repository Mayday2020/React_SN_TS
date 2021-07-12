import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message  from "./Message/Message";
import {ActionsTypes, DialogItemType, MessageType} from "../../Redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs_reducer"

type DialogsPropsType = {
    dialogs: {
        dialogs: DialogItemType[],
        messages: MessageType[]
        newMessageBody: string
    },
    dispatch: (action: ActionsTypes)=> void
}
const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogs.messages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageBody = props.dialogs.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator(newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea value={newMessageBody}
                                      placeholder={'Enter your message'}
                                      onChange={onNewMessageChange} />
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Dialogs;