import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, changeMessageActionCreator} from "../../../redux/dialogs-reducer";

const DialogItem = (props) =>
 {
//     let reff = React.createRef();
//
//     let sendMessage = () =>
//     {
//         let text = reff.current.value;
//         props.dispatch(addMessageActionCreator(props,text))
//     }
//     let changeText = () =>
//     {
//         let text = reff.current.value;
//         props.dispatch(changeMessageActionCreator(text))
//     }
    return (
        <div className={classes.dialog}>
            <img src={props.ava}/>
            <div>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
            </div>
            {/*<textarea ref={reff} onChange={changeText} value={props.curText}></textarea>*/}
            {/*<button onClick={sendMessage}>Send Message to {props.name}</button>*/}
        </div>
    )

}
export default DialogItem;