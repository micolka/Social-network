import React from 'react';
import s from './ProfileInfo.module.css'
import userDefaultPhoto from "../../../../asets/images/userDefaultPhoto.png";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm'

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    // Отображаем прелодер, если инфа о профайле еще не подгрузилась
    if (!props.profile) {
        props.toggleFetching(true);
        return <></>;
    } else {
        props.toggleFetching(false);
    }
    // Обновление фото
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    // Редактирование профайла
    const onSubmit = (formData) => {
        props.updateProfileInfo(formData, props.profile.userId).then(
            () => {
                setEditMode(false);   
            }
        );
    };

    return (
        <div>
            <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userDefaultPhoto} alt="ava"></img>
                {props.isOwner && <div>
                    <input className={s.inputSendImage} id={"input_file"} type={"file"} onChange={onMainPhotoSelected} />
                    <label className={s.btnSendImage} htmlFor={"input_file"}>Change avatar</label>
                    </div>}
                    {editMode 
                        ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
                        : <ProfileData switchToEditMode={ () => {setEditMode(true)}} isOwner={props.isOwner} profile={props.profile}/>}
                    
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, switchToEditMode}) => {
    return <div>
        <div>
            <b>Full name: </b> {profile.fullName}
        </div>
        <div>
            <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
            <b>Job description: </b> {profile.lookingForAJobDescription}
        </div>
        <b>Contacts: </b> {
            Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactMean={key} contactValue={profile.contacts[key]} />
            })
        }
        {isOwner && <button className={s.btnEditP} onClick={switchToEditMode}>Edit information</button>}
    </div>
};

const Contacts = ({ contactMean, contactValue }) => {
    return <div className={s.Contacts}><b>{contactMean}</b>: {contactValue}</div>
};

export default ProfileInfo;