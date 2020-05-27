import React from 'react';
import s from './Friendsbar.module.css'

const Friendsbar = () => {
    return (
        <div className={s.friends}>
            <div>Friends</div>
            <div className={s.item}>
                <img
                    src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' alt="ava1"></img>
                <div>Pedro</div>
            </div>
            <div className={s.item}>
                <img
                    src='https://cdn3.iconfinder.com/data/icons/users-avatars-2/128/superman-512.png' alt="ava2"></img>
                <div>Vasya</div>
            </div>
        </div>

    );
}

export default Friendsbar;