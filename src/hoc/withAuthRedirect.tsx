import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { AppStateType } from "../redux/reduxStore";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.authData.isAuthorised
});

type MapPropsType = ReturnType<typeof mapStateToPropsForRedirect>;

export const withAuthRedirect = (Component: React.ComponentType) => {
    class RedirectComponent extends React.Component<MapPropsType> {
        render () {
            let {isAuth, ...restProps} = this.props;
            if (!isAuth) return <Redirect to={"/login"}/>;
            return <Component  {...restProps}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}