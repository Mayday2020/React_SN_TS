import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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