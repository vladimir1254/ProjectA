import React from "react";
import {reduxForm} from "redux-form";
import classes from "../ProfileInfo.module.css"
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
const ProfileForm =({handleSubmit,profile,error}) =>
{
  return (
      <form  onSubmit={handleSubmit}>
          <div>
              <b>Full Name</b>:{createField('','fullName',Input,[])}
          </div>
          <div>
              <b> Looking for a job</b>:{createField('','lookingForAJob',Input,[],{type:'checkbox'})}
          </div>
          <div>
              <b>My professional skills</b>:{createField('Your professional skills','lookingForAJobDescription',Textarea,[])}
          </div>
              <div>
              <b>About me</b>:{createField('About me','aboutMe',Textarea,[])}
          </div>
          <div>
          <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
              return <div key={key} className = {classes.contact}>
                  <b>{key}</b>: {createField(key,"contacts."+key,Input,[])}
              </div>
          })}
          </div>
          { error && <div className={classes.loginerror}>{error}</div>}
          <div><button>Save</button></div>
      </form>
  )
}
const ProfileDataForm = reduxForm({form:"ProfileDataForm"})(ProfileForm)

export default ProfileDataForm