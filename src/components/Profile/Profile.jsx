import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return  (<div>
            <ProfileInfo profile = {props.profile} status = {props.status}
            updateStatus = {props.updateStatusThunkCreator} isOwner={props.isOwner}
     savePhoto={props.savePhotoThunkCreator}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>


    )
}
export default Profile;