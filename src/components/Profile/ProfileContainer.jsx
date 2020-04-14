import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunckCreator,
    showUserProfileThunckCreator,
    updateStatusThunckCreator
} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    // Первая отрисовка страницы
    componentDidMount() {
        // Берем параметр UserID из адресной строки
        let UserID = this.props.match.params.userId;
        if (!UserID) UserID = 6832; //этот костыль нужно фиксить
        this.props.showUserProfile(UserID);
        this.props.getUserStatus(UserID);
    }

    render () {

        if (!this.props.isAuth) return <Redirect to={"/login"}/>;

        return (
            <Profile  profile ={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    status: state.profileData.status,
});

export default compose(
    connect(mapStateToProps,{showUserProfile: showUserProfileThunckCreator,
                            getUserStatus: getStatusThunckCreator,
                            updateStatus: updateStatusThunckCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
