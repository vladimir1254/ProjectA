import {HeaderAPI, LoginAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA = 'auth/GET_CAPTCHA'

let initialProfile =   {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    captchaURL:null,
}
const authReducer = (state=initialProfile,action) =>
{
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA:
        {
           return {...state,...action.data}
        }
        // case GET_CAPTCHA:
        // {
        //     return {...state,...action.captchaURL}
        // }
        default:
            return state;
    }
}
export const setAuthData = (id,login,email,isAuth) =>
{
    return{type: SET_USER_DATA, data:{id,email,login,isAuth},}
}
export const setCaptchaURL = (captchaURL) =>
{
    return{type: GET_CAPTCHA, data:{captchaURL},}
}
export const getLoginThunkCreator = () => async (dispatch) => {
   let response = await HeaderAPI.getLogin();

        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setAuthData(id, login, email,true))
        }
}
export const getCaptchaURL = () => async (dispatch) => {
    let response = await SecurityAPI.getCaptchaURL();
    const captchaURL = response.url
    dispatch(setCaptchaURL(captchaURL))
}

export const LoginThunkCreator = (email,password,rememberMe,captcha=null) => async (dispatch) => {
        let response = await LoginAPI.Login(email,password,rememberMe,captcha)
            if (response.resultCode === 0) {
                dispatch(getLoginThunkCreator())
            }
            else
            {
                if(response.resultCode===10)
                {
                    dispatch(getCaptchaURL())
                }
                let message = response.messages.length >0 ? response.messages[0] : 'Some error'
                dispatch(stopSubmit("login",{_error:message}))
            }
    }
export const LogoutThunkCreator = () => async (dispatch) => {
     let response = await LoginAPI.Logout()

            if (response.resultCode === 0) {
                dispatch(setAuthData(null, null, null,false))
            }
}
export default authReducer;