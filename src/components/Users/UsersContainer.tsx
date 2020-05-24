import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    usersActions, getUsersThunckCreator, 
    unfollowUserThunckCreator, followUserThunckCreator
} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    currentPageSelector, followingQueie, isFetchingSelector,
    pageSizeSelector, totalUsersCountSelector, usersSuperSelector
} from "../../redux/selectors/usersSelector";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type MapStateToPropsType ={
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingQueie: Array<number>
}

type MapDispatchToPropsType ={
    getUsers: (currentPage: number, pageSize: number) => (void)
    setCurrentPage: (checkedPage: number) => (void)
    unfollowUserThunckCreator: (id: number) => (void)
    followUserThunckCreator: (id: number) => (void)
}

type OwnPropsType = {
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class UsersAPIContainer extends React.Component<PropsType> {

    // Первая отрисовка страницы с юзерами
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    // Функция переключения страницы с юзерами
    onPageChanged = (checkedPage: number) => {
        this.props.setCurrentPage(checkedPage);
        this.props.getUsers(checkedPage, this.props.pageSize);
    };

    render() {
        return <>
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingQueie={this.props.followingQueie}
                   unfollowUser={this.props.unfollowUserThunckCreator}
                   followUser={this.props.followUserThunckCreator}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
            />
        </>
    }
}

// Пример исплользования селекторов (уроки 81-83)
const mapToStateProps = (state: AppStateType): MapStateToPropsType => {
    return {
        // users: usersSelector(state),
        // использование сложного селектора
        users: usersSuperSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingQueie: followingQueie(state),
    }
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
        mapToStateProps, 
        {setCurrentPage: usersActions.setCurrentPage, getUsers: getUsersThunckCreator, unfollowUserThunckCreator, followUserThunckCreator}),
        // withAuthRedirect
)(UsersAPIContainer);

