import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type MessageType = {
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
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={'Bob'} id={1}/>
                    <DialogItem name={'Alex'} id={2}/>
                    <DialogItem name={'Ashley'} id={3}/>
                    <DialogItem name={'Victory'} id={4}/>
                    <DialogItem name={'Helen'} id={5}/>
                </div>
                <div className={s.messages}>
                    <Message message={'Is that u, Alex Clare?'}/>
                    <Message message={'Boooob?! Do somethink!!!'}/>
                    <Message message={'Not of your business'}/>
                </div>
            </div>
        </main>
    )
}
export default Dialogs;