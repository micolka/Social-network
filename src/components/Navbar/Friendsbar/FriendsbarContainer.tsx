import React from 'react';
import Friendsbar from './Friendsbar';
import { AppStateType } from '../../../redux/reduxStore';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getFriendsDataThunckCreator } from '../../../redux/profileReducer';
import { UserType } from '../../../types/types';

type MapStateToPropsType ={
    friendsData: Array<UserType>,
    isAuthorized: boolean,
}

type MapDispatchToPropsType ={
    getFriends: (currentPage?: number, pageSize?: number, friend?: boolean | undefined, term?: string) => (void)
}

type OwnPropsType = {
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class FriendsbarContainer extends React.Component<PropsType> {

    // Первая отрисовка страницы с юзерами
    componentDidMount() {
        this.props.isAuthorized && this.props.getFriends();      
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.isAuthorized && !prevProps.isAuthorized) {
            this.props.getFriends();    
        }
    }

    render() {
        return <>
            <Friendsbar friendsData={this.props.friendsData}
            isAuthorized={this.props.isAuthorized}
            />
        </>
    }
}


const mapToStateProps = (state: AppStateType): MapStateToPropsType => {
    return {
        friendsData: state.profileData.friendsData,
        isAuthorized: state.authData.isAuthorised,
    }
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
        mapToStateProps, 
        {getFriends: getFriendsDataThunckCreator}),
)(FriendsbarContainer);