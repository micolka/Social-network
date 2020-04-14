import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/preloader/preloader";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' alt="logo"></img>
            <div className={s.preloader}>
                {props.isFetching ? <Preloader/> : null}
            </div>
            <div className={s.loginBlock}>
                {props.isAuthorised ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;