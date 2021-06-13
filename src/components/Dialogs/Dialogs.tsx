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
    let dialogsData = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Ashley'},
        {id: 4, name: 'Victory'},
        {id: 5, name: 'Helen'}
    ],
        messagesData = [
            {id: 1, message: 'Is that u, Alex Clare?'},
            {id: 1, message: 'Boooob?! Do somethink!!!'},
            {id: 1, message: 'Not of your business'},
            {id: 1, message: 'Not of your business'},
            {id: 1, message: 'Not of your business'}
        ]
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                    <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                    <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                    <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                    <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                </div>
                <div className={s.messages}>
                    <Message id={messagesData[0].id} message={messagesData[0].message}/>
                    <Message id={messagesData[1].id} message={messagesData[1].message}/>
                    <Message id={messagesData[2].id} message={messagesData[2].message}/>
                    <Message id={messagesData[3].id} message={messagesData[3].message}/>
                    <Message id={messagesData[4].id} message={messagesData[4].message}/>
                </div>
            </div>
        </main>
    )
}
export default Dialogs;