import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_PROFILE='SET-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO = 'SET_PHOTO'
let initialProfile =   {
    posts: [{id: 1, message: 'Hi, how are you?', likecount: '20'},
        {id: 2, message: 'It\'s First post', likecount: '10'},
        {id: 3, message: 'It\'s First post', likecount: '10'},
        {id: 4, message: 'It\'s First post', likecount: '10'},],
    profile:null,
    isloading:false,
    status:'',
}

const profileReducer = (state=initialProfile,action) =>
{
    switch (action.type) {
        case ADD_POST:
        {
            let newPost =
                {
                    id: 5,
                    message: action.message,
                    likecount: 0,
                };
           return  {
                ...state,
                posts: [...state.posts,newPost],
            }
        }
        case SET_PROFILE:
        {
            return{ ...state, profile: {...action.profile}}
        }
        case SET_STATUS:
        {
            return {...state,status:action.status}
        }
        case DELETE_POST:
        {
            return{...state,posts:state.posts.filter(post => post.id!=action.id)}
        }
        case SET_PHOTO:
        {
            return{...state,profile:{...state.profile,photos:action.photos}}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (message) =>{return{type: ADD_POST,message}}
export const setProfile = (profile) => {return{type: SET_PROFILE, profile}}
export const deletePost = (id) => {return{type: DELETE_POST, id}}
export const setStatus = (status) => {return{type: SET_STATUS, status:status}}
export const setPhotoSuccess = (photos) => {return{type: SET_PHOTO, photos}}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
     let response = await ProfileAPI.getStatus(userId);
     dispatch(setStatus(response))
}
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
            if(response.resultCode===0)
            dispatch(setStatus(status))
    }
export const getProfileThunkCreator = (userId) => async (dispatch) => {
       let response = await ProfileAPI.getProfile(userId);
            dispatch(setProfile(response))
    }
export const savePhotoThunkCreator = (photo) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(photo);
    if(response.resultCode===0)
    dispatch(setPhotoSuccess(response.data.photos))
}
export const saveProfile = (profile) => async (dispatch,getState) => {
    let response = await ProfileAPI.saveProfile(profile);
    if(response.resultCode===0) {
        const userid = getState().auth.id
        dispatch(getProfileThunkCreator(userid))
    }
    else
    {
      let message = response.messages.length >0 ? response.messages[0] : 'Some error'
      dispatch(stopSubmit("ProfileDataForm",{_error:message}))
        return Promise.reject(response.messages[0])
    }
}


export default profileReducer;