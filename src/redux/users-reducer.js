import {UserAPI} from "../api/api";
import {updtateObjectinArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialProfile =   {
    users: [],
    pageSize:4,
    totalCount :0,
    currentPage:1,
    isfetching:false,
    followingInProgress:[2,3,4,5],
}

const usersReducer = (state=initialProfile,action) =>
{
    switch (action.type) {
        case FOLLOW:
        {
             return {
                ...state,
                 users:updtateObjectinArray(state.users,action.userid,"id",{followed:true})
                // users:state.users.map(u => {
                //     if(u.id === action.userid)
                //         return{...u,followed:true}
                //     return u
                // })
            }
        }
        case UNFOLLOW:
        {
            return {
                ...state,
                users:updtateObjectinArray(state.users,action.userid,"id",{followed:false})
                // users:state.users.map(u => {
                //     if(u.id === action.userid)
                //         return{...u,followed:false}
                //     return u
                // })
            }
        }
        case SET_CURRENT_PAGE:
        {
            return{...state,currentPage: action.currentPage}
        }
        case SETUSERS:
        {
            return{...state, users:[...action.users]}
        }
        case SET_TOTAL_COUNT:
        {
            return {...state, totalCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING:
        {
            return {...state,isfetching: action.isfetching}
        }
        case TOGGLE_IS_FOLLOWING:
        {
            return {
                ...state,
                followingInProgress: action.isfetching ? [...state.followingInProgress,action.userid]
            :state.followingInProgress.filter( id => id!=action.userid)
            }
        }

        default:
            return state;
    }
}
export const follow = (userid) =>
{
    return{type: FOLLOW, userid:userid,}
}
export const unfollow = (userid) =>
{
    return{type: UNFOLLOW, userid:userid,}
}
export const setusers = (users) =>
{
    return{type: SETUSERS, users:users,}
}
export const setcurpage = (currentPage) =>
{
    return{type: SET_CURRENT_PAGE,currentPage:currentPage}
}
export const setTotalCount = (totalCount) =>
{
    return{type: SET_TOTAL_COUNT,totalCount: totalCount}
}
export const setToggleFetch = (isfetching) =>
{
    return{type: TOGGLE_IS_FETCHING,isfetching:isfetching}
}
export const setFollowing = (isfetching,userid) =>
{
    return{type: TOGGLE_IS_FOLLOWING,isfetching,userid}
}
export const getUsersThunkCreator = (currentPage,pageSize) => async (dispatch) => {
        dispatch(setToggleFetch(true))
    let response = await UserAPI.getUsers(currentPage, pageSize);
            dispatch(setusers(response.items))
            dispatch(setTotalCount(response.totalCount))
            dispatch(setToggleFetch(false))
    }
export const getPagesThunkCreator = (p,pageSize) => async (dispatch) => {
        dispatch(setcurpage(p))
        dispatch(setToggleFetch(true))
     let response = await UserAPI.getUsers(p,pageSize);
            dispatch(setusers(response.items))
            dispatch(setToggleFetch(false))
}
export const followunfollow = async(dispatch,userid,fol,act) =>
{
    dispatch(setFollowing(true,userid))
    let actionCreator = act
    let response = await UserAPI.getUsersFol(userid, fol)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userid))
    }
    dispatch(setFollowing(false,userid))

}
export const followThunkCreator = (userid) => async (dispatch) => {
    let actionCreator = follow
    followunfollow(dispatch,userid,1,actionCreator)
}
export const unfollowThunkCreator = (userid) => async (dispatch) => {
    let actionCreator = unfollow
    followunfollow(dispatch,userid,2,actionCreator)

}
export default usersReducer;