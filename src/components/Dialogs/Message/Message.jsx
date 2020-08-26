import React from "react";
import classes from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={classes.message}>
            <img src={props.ava}/>
            {props.message}
        </div>
    )
}

export default Message;