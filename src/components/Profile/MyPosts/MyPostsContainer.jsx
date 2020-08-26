import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {MyContext} from "../../../index";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        posts: state.profilePages.posts,
        curText:state.profilePages.postMessage,
    }
}
let mapDispatchToProps = (dispatch) =>
{
    return {
        addPost: (message) => {
            dispatch(addPostActionCreator(message))
        },
    }

}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;