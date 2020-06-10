import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    usersActions, getUsersThunckCreator, 
    unfollowUserThunckCreator, followUserThunckCreator
} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    followingQueie, isFetchingSelector,
    pageSizeSelector, totalUsersCountSelector, usersSuperSelector
} from "../../redux/selectors/usersSelector";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type MapStateToPropsType ={
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followingQueie: Array<number>
    filterProps: {
        friend: boolean
        allUsers: boolean
        currentPage: number
        term: string
    }
    isAuthorized: boolean
}

type MapDispatchToPropsType ={
    getUsers: (currentPage: number, pageSize: number, friend?: boolean | undefined, term?: string) => (void)
    setCurrentPage: (checkedPage: number) => (void)
    setUsersFilter: (friend: boolean, allUsers: boolean, term: string) => (void)
    unfollowUserThunckCreator: (id: number) => (void)
    followUserThunckCreator: (id: number) => (void)
}

type OwnPropsType = {
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class UsersAPIContainer extends React.Component<PropsType> {

    // Первая отрисовка страницы с юзерами
    componentDidMount() {
        this.props.getUsers(this.props.filterProps.currentPage, this.props.pageSize, this.returnFriend(), this.props.filterProps.term);
    }

    // Функция переключения страницы с юзерами
    onPageChanged = (checkedPage: number) => {
        this.props.setCurrentPage(checkedPage);
    };

    // Обработка фильтрации юзеров
    onFilterChanged = (friend: boolean, allUsers: boolean, term: string) => {
        this.props.setUsersFilter(friend, allUsers, term);
        this.props.setCurrentPage(1);
    }

    // генерация свойства Friend для фильтрации в апишке 
    returnFriend = () => {
        if (this.props.filterProps.friend) return true;
        if (this.props.filterProps.allUsers) return undefined;
        return false;
    }

    componentDidUpdate(prevProps: PropsType){
        if (this.props.filterProps !== prevProps.filterProps) {
            this.props.getUsers(this.props.filterProps.currentPage, this.props.pageSize, this.returnFriend(), this.props.filterProps.term);
        } 
    }

    render() {
        return <>
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingQueie={this.props.followingQueie}
                   unfollowUser={this.props.unfollowUserThunckCreator}
                   followUser={this.props.followUserThunckCreator}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   onFilterChanged={this.onFilterChanged}
                   filterProps={this.props.filterProps}
                   isAuthorized={this.props.isAuthorized}
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
        isFetching: isFetchingSelector(state),
        followingQueie: followingQueie(state),
        filterProps: state.usersData.filterProps,
        isAuthorized: state.authData.isAuthorised
    }
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
        mapToStateProps, 
        {setCurrentPage: usersActions.setCurrentPage, setUsersFilter: usersActions.setUsersFilter,
        getUsers: getUsersThunckCreator, unfollowUserThunckCreator, followUserThunckCreator}),
        // withAuthRedirect
)(UsersAPIContainer);

