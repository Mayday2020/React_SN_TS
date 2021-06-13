import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type MessageType = {
    id: number
    message: string
}
type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog /*+ ' ' + s.active*/}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Ashley'},
        {id: 4, name: 'Victory'},
        {id: 5, name: 'Helen'}
    ],
        messages = [
        {id: 1, message: 'Is that u, Alex Clare?'},
        {id: 1, message: 'Boooob?! Do somethink!!!'},
        {id: 1, message: 'Not of your business'},
        {id: 1, message: 'Not of your business'},
        {id: 1, message: 'Not of your business'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)


    let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)
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