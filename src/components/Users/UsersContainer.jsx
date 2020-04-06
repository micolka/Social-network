import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleIsFollowingProgress,
    getUsersThunckCreator,
    unfollowUserThunckCreator,
    followUserThunckCreator
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/preloader";



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
        // Расчет количества страниц в селекторе
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        if (this.props.currentPage <= 5) {
            for (let i = 1; i <= 9; i++) {
                pages.push(i);
            }
        }
        else if (this.props.currentPage >= pagesCount - 5) {
            for (let i = pagesCount - 9; i <= pagesCount; i++) {
                pages.push(i);
            }
        }
        else {
            for (let i = 1 + (this.props.currentPage - 5); i <= 9 + (this.props.currentPage - 5); i++) {
                pages.push(i);
            }
        }
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pages={pages}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   followingQueie={this.props.followingQueie}
                   toggleIsFollProgr={this.props.toggleIsFollowingProgress}
                   unfollowUser={this.props.unfollowUserThunckCreator}
                   followUser={this.props.followUserThunckCreator}
            />
        </>
    }
}

// Объект с данными для connect
const mapToStateProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingQueie: state.usersData.followingQueie,
    }
};

const UsersContainer = connect(mapToStateProps, {
    follow, unfollow, setCurrentPage,
    toggleIsFollowingProgress, getUsers: getUsersThunckCreator,
    unfollowUserThunckCreator, followUserThunckCreator
})(UsersAPIContainer);

export default UsersContainer;