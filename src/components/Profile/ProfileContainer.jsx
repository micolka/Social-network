import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {    getStatusThunckCreator,
            showUserProfileThunckCreator,
            updateStatusThunckCreator } from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {toggleIsFetching} from "../../redux/usersReducer";

class ProfileContainer extends React.Component {

    // Первая отрисовка страницы
    componentDidMount() {
        // Берем параметр UserID из адресной строки
        let UserID = this.props.match.params.userId;
        if (!UserID) UserID = this.props.userId;
        this.props.showUserProfile(UserID);
        this.props.getUserStatus(UserID);
    }

    render () {

        return (
            <Profile  profile ={this.props.profile} status={this.props.status}
                      updateStatus={this.props.updateStatus} toggleFetching={this.props.toggleIsFetching}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    status: state.profileData.status,
    userId: state.authData.userId
});

export default compose(
    connect(mapStateToProps,{showUserProfile: showUserProfileThunckCreator,
                            getUserStatus: getStatusThunckCreator,
                            updateStatus: updateStatusThunckCreator,
                            toggleIsFetching: toggleIsFetching}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
