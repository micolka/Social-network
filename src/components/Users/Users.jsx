import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

        return <div>
            <div className={styles.selector}>
                {props.pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "6a526b7b-f77a-432a-b7a4-40cad8b83d7b"
                                }
                            }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "6a526b7b-f77a-432a-b7a4-40cad8b83d7b"
                                }
                            }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
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