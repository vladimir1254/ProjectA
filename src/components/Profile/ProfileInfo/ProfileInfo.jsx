import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import UserPhoto from "../../../assets/images/user.jpg";
import ProfileWithHoocks from "../ProfileWithHoocks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

export const Contact =({contactTitle,contactValue}) =>
{
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
const ProfileData = ({profile,isOwner,toEditMode}) =>
{
    return (<div>

        <div>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div>
            <b> Looking for a job</b>:{profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob? <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>:null}
        <div>
            <b>About me</b>:{profile.aboutMe}
        </div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key ={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        }
    )}
        {isOwner && <div><button onClick={toEditMode}>Edit</button></div>}
    </div>)

}
const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile}) => {
    let [editMode,setEditMode] = useState(false)
    if(!profile)
    {
        return <Preloader />
    }
    const onLoadingPhoto =(e) =>
    {
        if(e.target.files.length)
        {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (FormData) =>
    {
        saveProfile(FormData).then(()=>
        {
            setEditMode(false)
        })
    }
    return  (<div className={classes.content}>
            {/*<div>*/}
            {/*    <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>*/}
            {/*</div>*/}
            <div className={classes.description}>
                <img src = {profile.photos.large ? profile.photos.large : UserPhoto}/>
                {isOwner ? <input type={'file'} onChange={onLoadingPhoto}/> : null}
                <div>
                    <ProfileWithHoocks status = {status} updateStatus = {updateStatus} isOwner ={isOwner}/>
                    {editMode ?
          <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                        <ProfileData profile = {profile} isOwner={isOwner} toEditMode={()=>{setEditMode(true)}}/>}
                </div>
            </div>
        </div>


    )
}
export default ProfileInfo;