import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {

        return <div>
            <div className={styles.selector}>
                {props.pages.map( p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.restPages}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>;
                })}
            </div>
            <div className={styles.UsersBox}>
                {props.users.map(u => <div className={styles.userBlock}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} className={styles.userPhoto} alt="avas"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingQueie.some( (id) => id === u.id)} onClick={() => {
                            // Отписка от юзера
                            props.unfollowUser(u.id);

                        }} className={styles.btnFollow}>Unfollow</button>
                        : <button disabled={props.followingQueie.some( (id) => id === u.id)} onClick={() => {
                            // Подписка от юзера
                            props.followUser(u.id);

                        }} className={styles.btnFollow}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                <div>{u.name}</div>
                    <div>{u.status}</div>
            </span>
                <span>
                <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
            </span>
            </span>
            </div>)}
            </div>
        </div>
};

export default Users;