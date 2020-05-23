import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import { UserType } from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingQueie: Array<number>
    unfollowUser: (id: number) => (void)
    followUser: (id: number) => (void)
}

const Users: React.FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div className={styles.UsersBox}>
            {props.users.map(u => <div className={styles.userBlock}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto}
                             className={styles.userPhoto} alt="avas"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingQueie.some((id) => id === u.id)} onClick={() => {
                            // Отписка от юзера
                            props.unfollowUser(u.id);

                        }} className={styles.btnFollow}>Unfollow</button>
                        : <button disabled={props.followingQueie.some((id) => id === u.id)} onClick={() => {
                            // Подписка от юзера
                            props.followUser(u.id);

                        }} className={styles.btnFollow}>Follow</button>}
                </div>
            </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </div>)}
        </div>
    </div>
};

export default Users;