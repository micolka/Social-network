import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.fontImage}>
                <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src='https://i.pinimg.com/originals/8f/eb/df/8febdf571fe64838dda1315bfe22b1ed.jpg'></img>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;