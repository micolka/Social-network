import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../utils/validators/customTextArea";
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

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField, maxLength]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input}
                   validate={[requiredField, maxLength]} type={"password"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me
        </div>
        {props.captchaURL && <div>
            <div>
                <Field placeholder={"Captcha"} name={"captcha"} component={Input}
                       validate={[requiredField, maxCaptchaLength]}/>
            </div>
            <div>
                <img src={props.captchaURL} alt={"captcha"}/>
            </div>
        </div>}
        <div>
            <button>Login</button>
        </div>
        {props.error && <div className={s.formError}>{props.error}</div>}

    </form>
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

export default Login;