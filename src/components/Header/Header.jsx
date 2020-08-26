import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return  ( <header className={classes.header}>
        <img src='https://st.depositphotos.com/1757583/2169/i/450/depositphotos_21696885-stock-photo-yin-yang-symbol.jpg'/>
    <div className = {classes.loginblock}>
        {
            props.isAuth?
                <div>
                {props.login}
                <button onClick={props.LogoutThunkCreator}>Logout</button>
                </div>:<NavLink to = {'/login'}>Login</NavLink>

        }
    </div>
    </header>)
}
export default Header;