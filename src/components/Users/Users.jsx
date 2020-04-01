import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {

        return <div>
            <div className={styles.selector}>
                {props.pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>;
                })}
            </div>
            {props.users.map(u => <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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