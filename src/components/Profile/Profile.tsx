import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"
import { ProfileType } from '../../types/types';

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    toggleIsFetching: (isFetching: boolean) => (void)
    updateStatus: (newStatus: string) => void
    updateProfileInfo: (formData: ProfileType, userId: number) => Promise<void>
    savePhoto: (file: File) => (void)
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profileBlock}>
            <div className={s.profileInfo} >
                <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus} toggleIsFetching={props.toggleIsFetching}
                             savePhoto={props.savePhoto} updateProfileInfo={props.updateProfileInfo}/>
            </div>
            {props.isOwner && <div className={s.postContainer}>
                <MyPostsContainer />
            </div>}
        </div>
    );
}

export default Profile;