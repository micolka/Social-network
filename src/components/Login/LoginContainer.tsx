import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunckCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import { AppStateType } from "../../redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
    captchaURL: string | null
}
type MapDispatchToPropsType ={
    loginMe: (email: string, password: string, 
        rememberMe: boolean, captcha: string) => (void)
}
type OwnPropsType = {
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

 
class LoginContainer extends React.Component<PropsType> {
    render() {
        if (this.props.isAuth) return <Redirect to={"/profile"}/>;
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.authData.isAuthorised,
        captchaURL: state.authData.captchaURL
    }
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {loginMe: loginThunckCreator})(LoginContainer);