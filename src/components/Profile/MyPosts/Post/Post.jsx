import React from "react";
import classes from './Post.module.css'
const Post = (props) => {

    return  (
            <div className = {classes.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU'/>
                {props.message}
                <div>
                <span>like {props.likecount}</span>
                </div>
            </div>
    )
}
export default Post;