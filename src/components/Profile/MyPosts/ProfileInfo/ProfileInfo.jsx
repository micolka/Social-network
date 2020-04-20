import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import userDefaultPhoto from "../../../../asets/images/userDefaultPhoto.png";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    // Отображаем прелодер, если инфа о профайле еще не подгрузилась
    if (!props.profile) {
        props.toggleFetching(true);
        return <></>;
    } else {
        props.toggleFetching(false);
    }
    return (
        <div>
            {/*<div className={s.fontImage}>
                <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt="backImage"></img>
            </div>*/}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultPhoto}
                     alt="ava"></img>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJob ? "Ищу работу: " : "Ниче не ищу. "}
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;