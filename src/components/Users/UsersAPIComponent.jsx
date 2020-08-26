import React from 'react';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component
{
    componentDidMount()
    {
        const {currentPage,pageSize}=this.props
        this.props.getUsersThunkCreator(currentPage,pageSize)
    }
    onPagech = (p)=> {
        const {pageSize} = this.props
        this.props.getPagesThunkCreator(p,pageSize)
    }
    render() {
        return (
            <>
                {this.props.isfetching ? <Preloader/> : null}
            <Users
                currentPage = {this.props.currentPage}
                onPagech = {this.onPagech}
            totalCount = {this.props.totalCount}
                pageSize ={this.props.pageSize}
            users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                setFollowing = {this.props.setFollowing}
                isfollow = {this.props.isfollowing}
                followThunkCreator = {this.props.followThunkCreator}
                unfollowThunkCreator = {this.props.unfollowThunkCreator}
            />
            </>
        )
    }
}
export default UsersAPIComponent;