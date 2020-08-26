import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    setProfile,
    getStatusThunkCreator,
    updateStatusThunkCreator, savePhotoThunkCreator, saveProfile
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
class ProfileContainer extends React.Component
{
    refreshProfile()
    {
        let userId = this.props.match.params.userid;
        if(!userId)
        {
            userId = this.props.id
            if(!userId)
            {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userid!=prevProps.match.params.userid)
        this.refreshProfile()
    }

    render()
    {
   // debugger
        return (
        <Profile {...this.props} isOwner={!this.props.match.params.userid}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
       profile: state.profilePages.profile,
        status:state.profilePages.status,
       id: state.auth.id,
        isAuth:state.auth.isAuth,
    }
}
export default compose(
    connect(mapStateToProps,{setProfile,getProfileThunkCreator,getStatusThunkCreator,
    updateStatusThunkCreator,savePhotoThunkCreator,saveProfile}),
    withRouter,
    //   withAuthRedirect,
)(ProfileContainer)