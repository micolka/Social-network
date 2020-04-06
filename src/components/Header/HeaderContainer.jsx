import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunckCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        // логинимся в сеть
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorised: state.authData.isAuthorised,
        login: state.authData.login,
    }
};

export default connect(mapStateToProps, {authMe: authMeThunckCreator})(HeaderContainer);