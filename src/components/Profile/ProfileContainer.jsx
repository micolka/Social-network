import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {    getStatusThunckCreator,
            showUserProfileThunckCreator,
            updateStatusThunckCreator,
            saveProfilePhotoThunckCreator,
            updateProfileThunckCreator } from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {toggleIsFetching} from "../../redux/usersReducer";

class ProfileContainer extends React.Component {

    refreshProfile () {
        // Берем параметр UserID из адресной строки
        let UserID = this.props.match.params.userId;
        if (!UserID) UserID = this.props.userId;
        this.props.showUserProfile(UserID);
        this.props.getUserStatus(UserID);
    }

    // Первая отрисовка страницы
    componentDidMount() {
        this.refreshProfile();
    }

    // Обновление компоненты
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile isOwner ={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                updateProfileInfo={this.props.updateProfileInfo}
                savePhoto={this.props.savePhoto}
                toggleFetching={this.props.toggleIsFetching} />
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
                            savePhoto: saveProfilePhotoThunckCreator,
                            updateProfileInfo:updateProfileThunckCreator,
                            toggleIsFetching: toggleIsFetching}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
