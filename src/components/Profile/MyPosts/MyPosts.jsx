import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    // создание тегов на основе полученных данных
    let formatedPostsData = props.posts.map((elem) => {
        return <Post message={elem.message} likeCount={elem.likeCount}/>;
    });

    // Ссылка на TextArea
    let newPostElement = React.createRef();
    // Функция-обработчик нажатия на button
    let  butAddPostClick = () => {
        props.addPost();
    };
    // Функция обработчик изменения содержимого textArea
    let textAreaUpdate = () => {
        let text = newPostElement.current.value;
        props.updatePostArea(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={textAreaUpdate} ref={newPostElement}
                              value={props.textAreaValue} placeholder={'Type something here'}/>
                </div>
                <div>
                    <button onClick={ butAddPostClick }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {formatedPostsData}
            </div>
        </div>
    );
}

export default MyPosts;