import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setcurpage,
    setTotalCount,
    setusers,
    setToggleFetch,
    unfollow,
    setFollowing, getUsersThunkCreator, getPagesThunkCreator,
    followThunkCreator, unfollowThunkCreator
} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {compose} from "redux";
import {
    getcurrentPage,
    getisFetching,
    getisfollowing,
    getPageSize,
    gettotalCount,
    getUsers
} from "../../redux/users-selectors";

let mapStateToProps = (state) =>
{
    return {
      users: getUsers(state),
        pageSize :getPageSize(state),
        totalCount:gettotalCount(state),
        currentPage:getcurrentPage(state),
    isfetching: getisFetching(state),
        isfollowing:getisfollowing(state),
    }
}
export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setusers, setcurpage,
            setTotalCount, setToggleFetch,setFollowing,
            getUsersThunkCreator,getPagesThunkCreator,
            followThunkCreator,unfollowThunkCreator,
        }),
   // withAuthRedirect,
)(UsersAPIComponent)