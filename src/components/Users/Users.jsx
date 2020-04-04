import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../API/API";

const Users = (props) => {

        return <div>
            <div className={styles.selector}>
                {props.pages.map( p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.restPages}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>;
                })}
            </div>
            {props.users.map(u => <div id={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} className={styles.userPhoto} alt="avas"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingQueie.some( (id) => id === u.id)} onClick={() => {
                            props.toggleIsFollProgr(true, u.id);
                            // Отписка от юзера
                            UsersAPI.unfollowUser(u.id).then(response => {
                                    if (response.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleIsFollProgr(false, u.id);
                                });

                        }}>Unfollow</button>
                        : <button disabled={props.followingQueie.some( (id) => id === u.id)} onClick={() => {
                            props.toggleIsFollProgr(true, u.id);
                            // Подписка на юзера
                            UsersAPI.followUser(u.id).then(response => {
                                    if (response.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleIsFollProgr(false, u.id);
                                });
                        }}>Follow</button>}
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

}

export default Users;