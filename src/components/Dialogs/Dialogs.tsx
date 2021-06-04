import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <main>
            <div className={s.content_image}>Dialogs Image</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>Alex</div>
                    <div className={s.dialog + ' ' + s.active}>Bob</div>
                    <div className={s.dialog}>Ashley</div>
                    <div className={s.dialog}>Victory</div>
                    <div className={s.dialog}>Helen</div>
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