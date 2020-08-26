import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginThunkCreator, LogoutThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css"
const LoginForm = ({handleSubmit,error,captchaURL}) =>
{
    return(
            <form onSubmit={handleSubmit}>
                {createField('login','email',Input,[required])}
                {createField('password','password',Input,[required]
                ,{type:'password'})}
                {createField('','rememberMe',Input,[],{type:'checkbox'},
                'rememberMe')}
                { error && <div className={classes.loginerror}>{error}</div>}
                {captchaURL && <img src={captchaURL}/>}
                {captchaURL && createField('Symbols from image','captcha',Input,[required])}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
const Login = (props) =>
{
    const onSubmit = (FormData) =>
    {
        props.LoginThunkCreator(FormData.email,FormData.password,FormData.rememberMe,FormData.captcha)
    }
    if(props.isAuth)
    {
       return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit = {onSubmit} captchaURL = {props.captchaURL}/>
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        captchaURL:state.auth.captchaURL,
        isAuth:state.auth.isAuth
    }
    )
export default connect(mapStateToProps,{LoginThunkCreator,LogoutThunkCreator})(Login);