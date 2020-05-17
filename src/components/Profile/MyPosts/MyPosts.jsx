import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../../utils/validators/customTextArea";

const MyPosts = (props) => {

    // создание массива тегов с постами для рендера
    let formatedPostsData = props.posts.map((elem) => {
        return <Post key={elem.id} message={elem.message} likeCount={elem.likeCount}/>;
    });

    // обработка события Publish Post
    const onSubmit = (formData) => {
        let {postTxtValue} = formData;
        props.addPost(postTxtValue);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PublishPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {formatedPostsData}
            </div>
        </div>
    );
}

let maxLength = maxLengthCreator(50);

const PublishPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Type something here'} name={"postTxtValue"}
                   component={TextArea} validate={[requiredField, maxLength]} className={s.inputPost}/>
        </div>
        <div>
            <button className={s.btnSendPost}>Add post</button>
        </div>
    </form>
};
                                            // a unique name for the form
const PublishPostReduxForm = reduxForm({form: 'publishPostForm'})(PublishPostForm);

export default MyPosts;