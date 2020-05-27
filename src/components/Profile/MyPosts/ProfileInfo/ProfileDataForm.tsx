import React from 'react';
import {createCustomField, Input, TextArea} from '../../../../utils/validators/customTextArea'
import {reduxForm, InjectedFormProps} from "redux-form";
import s from './ProfileInfo.module.css'
import { ProfileType, ContactsType } from '../../../../types/types';


type ProfileDataFormValuesType = {
    fullName: string
    aboutMe: string
    lookingForAJob: string
    lookingForAJobDescription: string
}
type FormPropsType = {
    profile: ProfileType
}

type FormKeysType = Extract<keyof ProfileDataFormValuesType, string>;

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormValuesType,
FormPropsType> & FormPropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
        <b>Full name: </b> {createCustomField<FormKeysType>("Full name", "fullName",Input, [], s.inputInfo)}
        </div>
        <div>
            <b>About me: </b> {createCustomField<FormKeysType>("About me", "aboutMe",TextArea, [], s.areaInfo)}
        </div>
        <div>
            <b>Looking for a job: </b> {createCustomField<FormKeysType>("", "lookingForAJob",Input, [], null, {type: "checkbox"})}
        </div>
        <div>
            <b>Job description: </b>
            {createCustomField<FormKeysType>("Job description", "lookingForAJobDescription",TextArea, [], s.areaInfo)}
        </div>
          <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
              return <div key={key} className={s.Contacts}>
                  <b>{key}</b>
                  {createCustomField(profile.contacts[key as keyof ContactsType], "contacts." + key, Input, [], s.inputInfo)}
              </div>
            })
        } 
        {error && <div className={s.formError}>{error}</div>}
        <button className={s.btnEditP}>save</button>
    </form>
};

const ProfileDataReduxForm = reduxForm<ProfileDataFormValuesType, FormPropsType>({
    // a unique name for the form
    form: 'editProfileForm'
})(ProfileDataForm);

export default ProfileDataReduxForm;