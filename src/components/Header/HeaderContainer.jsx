import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {UsersAPI} from "../../API/API";

class HeaderContainer extends React.Component {

    componentDidMount() {
        // логинимся в сеть
        UsersAPI.getAuthMe().then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);