import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage, toggleIsFollowingProgress,
    getUsersThunckCreator, unfollowUserThunckCreator,
    followUserThunckCreator
} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    currentPageSelector, followingQueie, isFetchingSelector,
    pageSizeSelector, totalUsersCountSelector, usersSuperSelector
} from "../../redux/selectors/usersSelector";

class UsersAPIContainer extends React.Component {

    // Первая отрисовка страницы с юзерами
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    // Функция переключения страницы с юзерами
    onPageChanged = (checkedPage) => {
        this.props.setCurrentPage(checkedPage);
        this.props.getUsers(checkedPage, this.props.pageSize);
    };

    render() {
        return <>
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingQueie={this.props.followingQueie}
                   toggleIsFollProgr={this.props.toggleIsFollowingProgress}
                   unfollowUser={this.props.unfollowUserThunckCreator}
                   followUser={this.props.followUserThunckCreator}
            />
        </>
    }
}

// Пример исплользования селекторов (уроки 81-83)
const mapToStateProps = (state) => {
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
    connect(mapToStateProps, {setCurrentPage, toggleIsFollowingProgress,
        getUsers: getUsersThunckCreator, unfollowUserThunckCreator, followUserThunckCreator}),
   // withAuthRedirect
)(UsersAPIContainer);

