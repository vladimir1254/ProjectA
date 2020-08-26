import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxlength = maxlengthCreator(10)

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'addPost'} component={Textarea}
                       placeholder={'New post'}
                       validate={[required, maxlength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPosts = React.memo(props => {
    console.log('render')
    let postsElem = props.posts.map(p => <Post key={p.id} message={p.message} likecount={p.likecount}/>)

    let OnAddPost = (post) => {
        props.addPost(post)
    }
    const onSubmit = (FormData) => {
        OnAddPost(FormData.addPost)
        //    console.log(FormData)

    }
    const AddPostReduxForm = reduxForm({form: 'addNewPost'})(AddPost)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={classes.posts}>
            </div>
            {postsElem}
        </div>
    )

});

export default MyPosts;