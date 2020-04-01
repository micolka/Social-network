import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.fontImage}>
                <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}></img>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;