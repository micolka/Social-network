import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunckCreator,
        showUserProfileThunckCreator,
        updateStatusThunckCreator,
        saveProfilePhotoThunckCreator,
        updateProfileThunckCreator, 
        profileActions} from "../../redux/profileReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {usersActions} from "../../redux/usersReducer";
import { AppStateType } from '../../redux/reduxStore';
import { ProfileType } from '../../types/types';

type MapStateToPropsType = {
    userId: number
    profile: ProfileType
    status: string
}
type MapDispatchToPropsType ={
    toggleIsFetching: (isFetching: boolean) => (void)
    updateStatus: (newStatus: string) => void
    updateProfileInfo: (formData: ProfileType, userId: number) => Promise<void>
    savePhoto: (file: File) => (void)
    showUserProfile: (UserID: number) => void
    getUserStatus: (UserID: number) => void
    clearUserProfile: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>;
type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile () {
        // Берем параметр UserID из адресной строки
        let UserID = +this.props.match.params.userId;
        if (!UserID) UserID = this.props.userId;
        if (UserID !== this.props.userId) {
            this.props.clearUserProfile();    
        }
        this.props.showUserProfile(UserID);
        this.props.getUserStatus(UserID);
    }

    // Первая отрисовка страницы
    componentDidMount() {
        this.refreshProfile();
    }

    // Обновление компоненты
    componentDidUpdate(prevProps: PropsType) {
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
                toggleIsFetching={this.props.toggleIsFetching} />
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    userId: state.authData.userId,
    profile: state.profileData.profile,
    status: state.profileData.status
});

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {showUserProfile: showUserProfileThunckCreator,
        getUserStatus: getStatusThunckCreator,
        updateStatus: updateStatusThunckCreator,
        savePhoto: saveProfilePhotoThunckCreator,
        clearUserProfile: profileActions.clearUserProfile,
        updateProfileInfo:updateProfileThunckCreator,
        toggleIsFetching: usersActions.toggleIsFetching}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
