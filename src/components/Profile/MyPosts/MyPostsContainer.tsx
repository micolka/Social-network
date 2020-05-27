import {profileActions} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profileData.posts
    };
};

const MyPostsContainer = connect(mapStateToProps, {addPost: profileActions.addPost})(MyPosts);
export default MyPostsContainer;