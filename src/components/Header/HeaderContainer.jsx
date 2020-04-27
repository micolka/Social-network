import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {exitThunckCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorised: state.authData.isAuthorised,
        login: state.authData.login,
        isFetching: state.usersData.isFetching,
    }
};

export default connect(mapStateToProps, {disconnectMe: exitThunckCreator})(HeaderContainer);