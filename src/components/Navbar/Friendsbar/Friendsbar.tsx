import React from 'react';
import s from './Friendsbar.module.css'
import { UserType } from '../../../types/types';
import userDefaultPhoto from '../../../asets/images/userDefaultPhoto.png'

type PropsType = {
    friendsData: Array<UserType>,
    isAuthorized: boolean 
}

const Friendsbar: React.FC<PropsType> = (props) => {

    if (!props.isAuthorized) return <></>

    return (
        <div className={s.friends}>
            My friends
            {props.friendsData.map(item => <div className={s.item} key={item.id}>
                <img src={item.photos.small != null ? item.photos.small : userDefaultPhoto} alt='avaFr'/>
            <div>{item.name}</div>
            </div>)}
        </div>

    );
}

export default Friendsbar;