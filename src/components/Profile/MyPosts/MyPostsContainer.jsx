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

const MyPostsContainer = connect(mapStateToProps, {updatePostArea, addPost})(MyPosts);
export default MyPostsContainer;