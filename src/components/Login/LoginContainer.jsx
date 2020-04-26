import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunckCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


class LoginContainer extends React.Component {
    render() {
        if (this.props.isAuth) return <Redirect to={"/profile"}/>;
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuthorised,
        captchaURL: state.authData.captchaURL
    }
};

export default connect(mapStateToProps,
    {loginMe: loginThunckCreator})(LoginContainer);