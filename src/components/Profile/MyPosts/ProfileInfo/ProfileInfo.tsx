import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css'
import userDefaultPhoto from "../../../../asets/images/userDefaultPhoto.png";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm'
import { ProfileType, ContactsType} from '../../../../types/types';
import Preloader from '../../../common/preloader/preloader';

type ProfileInfoType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    toggleIsFetching: (isFetching: boolean) => (void)
    updateStatus: (newStatus: string) => void
    updateProfileInfo: (formData: ProfileType, userId: number) => Promise<void>
    savePhoto: (file: File) => (void)
}

const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false);

    // Отображаем прелодер, если инфа о профайле еще не подгрузилась
    if (!props.profile) {
        return <><Preloader /></>;
    }
    // Обновление фото
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            props.savePhoto(e.target.files[0]);
        }
    };

    // Редактирование профайла
    const onSubmit = (formData: ProfileType) => {
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

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    switchToEditMode: () => (void)
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, switchToEditMode}) => {
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
                    return profile.contacts[key as keyof ContactsType] && 
                    <Contacts key={key} contactMean={key} contactValue={profile.contacts[key as keyof ContactsType]} />
            })
        }
        {isOwner && <button className={s.btnEditP} onClick={switchToEditMode}>Edit information</button>}
    </div>
};

type ContactsValuesType = {
    contactMean: string
    contactValue: string
}

const Contacts: React.FC<ContactsValuesType> = ({ contactMean, contactValue }) => {
    return <div className={s.Contacts}><b>{contactMean}</b>: {contactValue}</div>
};

export default ProfileInfo;