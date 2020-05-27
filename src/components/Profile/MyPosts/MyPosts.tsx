import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea, createCustomField} from "../../../utils/validators/customTextArea";
import { PostType } from '../../../types/types';

type PropsType = {
    posts: Array<PostType>
    addPost: (postTxtValue: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    // создание массива тегов с постами для рендера
    let formatedPostsData = props.posts.map((elem) => {
        return <Post key={elem.id} message={elem.message} likeCount={elem.likeCount}/>;
    });

    // обработка события Publish Post
    const onSubmit = (formData: PostFormValuesType) => {
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

type PostFormValuesType = {
    postTxtValue: string
}
type FormPropsType = {
}
type FormKeysType = Extract<keyof PostFormValuesType, string>;

const PublishPostForm: React.FC<InjectedFormProps<PostFormValuesType,
FormPropsType> & FormPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createCustomField<FormKeysType>("Type something here", "postTxtValue", TextArea, [requiredField, maxLength], s.inputPost)}
        </div>
        <div>
            <button className={s.btnSendPost}>Add post</button>
        </div>
    </form>
};
                                            // a unique name for the form
const PublishPostReduxForm = reduxForm<PostFormValuesType, FormPropsType>({form: 'publishPostForm'})(PublishPostForm);

export default MyPosts;