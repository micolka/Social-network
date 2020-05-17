import React from 'react';
import {createCustomField, Input, TextArea} from './../../../../utils/validators/customTextArea'
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
        <b>Full name: </b> {createCustomField("Full name", "fullName",Input, [], s.inputInfo)}
        </div>
        <div>
            <b>About me: </b> {createCustomField("About me", "aboutMe",TextArea, [], s.areaInfo)}
        </div>
        <div>
            <b>Looking for a job: </b> {createCustomField("", "lookingForAJob",Input, [], null, {type: "checkbox"})}
        </div>
        <div>
            <b>Job description: </b>
            {createCustomField("Job description", "lookingForAJobDescription",TextArea, [], s.areaInfo)}
        </div>
          <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
              return <div key={key} className={s.Contacts}>
                  <b>{key}</b>
                  {createCustomField(profile.contacts[key], "contacts." + key, Input, [], s.inputInfo)}
              </div>
            })
        } 
        {error && <div className={s.formError}>{error}</div>}
        <button className={s.btnEditP}>save</button>
    </form>
};

const ProfileDataReduxForm = reduxForm({
    // a unique name for the form
    form: 'editProfileForm'
})(ProfileDataForm);

export default ProfileDataReduxForm;