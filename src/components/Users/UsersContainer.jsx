import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    setTotalUsersCount,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../common/preloader/preloader";

class UsersAPIContainer extends React.Component {

    // Первая отрисовка страницы
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    // Функция переключения страницы с юзерами
    onPageChanged = (checkedPage) => {
        this.props.setCurrentPage(checkedPage);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${checkedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });

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
    }
};

const UsersContainer = connect(mapToStateProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersAPIContainer);

export default UsersContainer;