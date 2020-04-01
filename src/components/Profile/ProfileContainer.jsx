import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    // Первая отрисовка страницы
    componentDidMount() {
        let UserID = this.props.match.params.userId;
        if (!UserID) UserID = 2;
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + UserID)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
    }

    render () {
        return (
            <Profile  profile ={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile
});

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithURLDataProfileContainer);