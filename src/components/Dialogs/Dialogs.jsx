import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxlengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) =>{
     let dialogsElements = props.dialogsPages.dialogsData.map(dialog => <DialogItem name={dialog.name} id = {dialog.id}
     ava ={dialog.ava} curText={props.dialogsPages.curText} dispatch = {props.dispatch}/>);
     let messages = props.dialogsPages.messagesData.map(m =><Message message={m.message} ava={m.ava} />)

    const maxlength = maxlengthCreator(30)
 const AddNewMessage = (props) =>
 {
     return (
         <form onSubmit={props.handleSubmit}>
             <div>
           <Field name = {'NewMessage'} component={Textarea}
           placeholder='write your message' validate={[required,maxlength]}/>
             </div>
             <div>
                 <button>Send message</button>
             </div>
         </form>
     )
 }
 const AddNewMessageReduxForm = reduxForm({form:'dialogAddMessage'})(AddNewMessage)
    const addNewMessage = (FormData) =>
    {
        console.log(FormData.NewMessage)
        onClickbut(FormData.NewMessage)
    }
 let onClickbut =(message) =>
 {
     props.Clickbut(message);
 }
    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogsItem}>
              {dialogsElements}
          </div>
            <div className={classes.messages}>
                <div>{messages}</div>
              <AddNewMessageReduxForm onSubmit = {addNewMessage}/>
            </div>
        </div>
    )

}
export default Dialogs;