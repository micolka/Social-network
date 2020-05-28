import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import { UserType } from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number 
    users: Array<UserType>
    followingQueie: Array<number>
    isAuthorized: boolean
     filterProps: {friend: boolean; allUsers: boolean; currentPage: number}
    unfollowUser: (id: number) => (void)
    followUser: (id: number) => (void)
    onFilterChanged: (friend: boolean, allUsers: boolean) => (void)
    onPageChanged: (pageNumber: number) => void
}

const Users: React.FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged, ...props}) => {

    return <div>      
        {props.isAuthorized && <div className={styles.selector}>
            <span className={props.filterProps.allUsers ? styles.selectedItem : styles.restItems} 
                onClick={() => {props.onFilterChanged(false, true)}}>All</span>
            <span className={props.filterProps.friend ? styles.selectedItem : styles.restItems}
                onClick={() => {props.onFilterChanged(true, false)}}>Friends</span>
            <span className={(!props.filterProps.friend && !props.filterProps.allUsers) ? styles.selectedItem : styles.restItems} 
                onClick={() => {props.onFilterChanged(false, false)}}>Rest</span>
        </div>}
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
{/*                     <div>{u.status}</div>
                    <div>{u.uniqueUrlName}</div> */}
                </span>
            </div>)}
        </div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   currentPage={props.filterProps.currentPage} onPageChanged={onPageChanged}/>
    </div>
};

export default Users;