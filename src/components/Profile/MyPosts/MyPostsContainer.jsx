import {profileActions} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts
    };
};

const MyPostsContainer = connect(mapStateToProps, {addPost: profileActions.addPost})(MyPosts);
export default MyPostsContainer;