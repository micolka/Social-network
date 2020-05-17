import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createCustomField, Input} from "../../utils/validators/customTextArea";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import s from './Login.module.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        let {login, password, rememberMe, captcha} = formData;
        props.loginMe(login, password, rememberMe, captcha);
    };
    
    return <div className={s.loginCommon}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>;
};

let maxLength = maxLengthCreator(30);
let maxCaptchaLength = maxLengthCreator(10);

const LoginForm = ({handleSubmit, captchaURL, error}) => {
    return <form onSubmit={handleSubmit}>
        {createCustomField("Login", "login", Input, [requiredField, maxLength], s.inputLogin)}
        {createCustomField("Password", "password", Input, [requiredField, maxLength], s.inputLogin, {type: "password"})}
        <div className={s.remMe}>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me
        </div>
        {captchaURL && <div>
            {createCustomField("Captcha", "captcha", Input, [requiredField, maxCaptchaLength], s.inputLogin)}
            <div>
                <img src={captchaURL} alt={"captcha"}/>
            </div>
        </div>}
        <div>
            <button className={s.btnLogin}>Login</button>
        </div>
        {error && <div className={s.formError}>{error}</div>}
    </form>
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

export default Login;