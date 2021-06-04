import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/1'}>Alex</NavLink>
                    </div>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to={'/dialogs/2'}>Bob</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/3'}>Ashley</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/4'}>Victory</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/5'}>Helen</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Is that u, Alex Clare?</div>
                    <div className={s.message}>Boooob?! Do somethink!!!</div>
                    <div className={s.message}>Not of your business</div>
                </div>
            </div>
        </main>
    )
}
export default Dialogs;