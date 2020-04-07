import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {showUserProfileThunckCreator} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    // Первая отрисовка страницы
    componentDidMount() {
        // Берем параметр UserID из адресной строки
        let UserID = this.props.match.params.userId;
        this.props.showUserProfile(UserID);
    }

    render () {

        if (!this.props.isAuth) return <Redirect to={"/login"}/>;

        return (
            <Profile  profile ={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
});

export default compose(
    connect(mapStateToProps,{showUserProfile: showUserProfileThunckCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
