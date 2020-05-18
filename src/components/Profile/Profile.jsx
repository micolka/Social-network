import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"


const Profile = (props) => {
    return (
        <div className={s.profileBlock}>
            <div className={s.profileInfo} >
                <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus} toggleFetching={props.toggleFetching}
                             savePhoto={props.savePhoto} updateProfileInfo={props.updateProfileInfo}/>
            </div>
            {props.isOwner && <div className={s.postContainer}>
                <MyPostsContainer />
            </div>}
        </div>
    );
}

export default Profile;