import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../utils/validators/customTextArea";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Login = (props) => {

    const onSubmit = (formData) => {
        let {login, password, rememberMe} = formData;
        props.loginMe(login, password, rememberMe);
    };
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

let maxLength = maxLengthCreator(30);

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField, maxLength]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} validate={[requiredField, maxLength]}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

export default Login;