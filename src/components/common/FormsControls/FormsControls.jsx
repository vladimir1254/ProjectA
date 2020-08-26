import React from "react";
import classes from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input,meta:{error,touched},children}) =>
{
    const has_error = error && touched
    return(<div className = {classes.formcontrol + ' '+(has_error ? classes.error : +"")}>
            <div>
                {children}
                <div>
                    {has_error && <span>{error}</span>}
                </div>
            </div>
        </div>
    )
}
export const Textarea = (props) =>
{
    const {input,meta,...restprops} = props
    return <FormControl {...props}><textarea {...input} {...restprops}/></FormControl>
}

export const Input = (props) =>
{
    const {input,meta,...restprops} = props
    return <FormControl {...props}><input {...input} {...restprops}/></FormControl>
}
export const createField = (placeholder,name,component,validate,props={},text='') =>(
    <div>
    <Field placeholder={placeholder} name={name} component={component}
           validate={validate}
        {...props}
    />{text}
    </div>)