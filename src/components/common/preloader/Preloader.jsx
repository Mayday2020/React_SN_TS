import React from 'react'
import s from './Preloader.module.css'
import preloader from "../../../images/spinner.gif";

const Preloader = () => {
    return <div>
        <img alt={'load...'} src={preloader} width={'50px'} className={s.spin}/>
    </div>
}
export default Preloader