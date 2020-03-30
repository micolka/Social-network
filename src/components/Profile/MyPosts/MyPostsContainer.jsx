import React from 'react';
import {addPost, updatePostArea} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        textAreaValue: state.profileData.textAreaValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostTextArea: (text) => {
            let action = updatePostArea(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPost());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;