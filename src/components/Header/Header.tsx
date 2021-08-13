import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {setAuthUserData} from "../../Redux/auth_reducer";
import {ActionsTypes} from "../../Redux/store";

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
    setAuthUserData: any
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.header_icon}><span>Icon</span></div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header;