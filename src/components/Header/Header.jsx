import React from 'react';
import './Header.scss';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import logoSPSN from '../../asets/images/logoSPSN.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logoImg} src={logoSPSN} alt="logo"></img>
            <div className={s.preloader}>
                {(props.isFetching) ? <Preloader/> : null}
            </div>
            <div className={s.loginBlock}>
                {props.isAuthorised ?
                    <div>
                        <div>
                            {props.login}
                        </div>
                        <button className={s.btnExit} onClick={() => {
                            props.disconnectMe()
                        }}>
                            Exit
                        </button>
                    </div>
                    : <div className='navLogin'>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>}
            </div>
        </header>
    );
}

export default Header;