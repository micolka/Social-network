import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {exitThunckCreator} from "../../redux/authReducer";
import { AppStateType } from '../../redux/reduxStore';

type MapStateToPropsType = {
    isFetching: boolean
    isAuthorised: boolean
    login: string | null
}
type MapDispatchToPropsType ={
    disconnectMe: () => void
}
type OwnPropsType = {
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuthorised: state.authData.isAuthorised,
        login: state.authData.login,
        isFetching: state.usersData.isFetching,
    }
};

export default connect(mapStateToProps, {disconnectMe: exitThunckCreator})(HeaderContainer);