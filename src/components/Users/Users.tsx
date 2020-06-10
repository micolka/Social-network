import React from "react";
import styles from './users.module.css';
import userDefaultPhoto from '../../asets/images/userDefaultPhoto.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import { UserType } from "../../types/types";
import { reduxForm, InjectedFormProps } from "redux-form";
import { createCustomField, Input } from "../../utils/validators/customTextArea";

type PropsType = {
    totalUsersCount: number
    pageSize: number 
    users: Array<UserType>
    followingQueie: Array<number>
    isAuthorized: boolean
    filterProps: {friend: boolean; allUsers: boolean; currentPage: number; term: string}
    unfollowUser: (id: number) => (void)
    followUser: (id: number) => (void)
    onFilterChanged: (friend: boolean, allUsers: boolean, term: string) => (void)
    onPageChanged: (pageNumber: number) => void
    
}

const Users: React.FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged, ...props}) => {
   
    // обработка события Search
    const onSubmit = (formData: SearchFormValuesType) => {
        let { term } = formData;
        props.onFilterChanged(props.filterProps.friend, props.filterProps.allUsers, term);
    };

    return <div>
        <div className={styles.selector}>
            {props.isAuthorized && <div >
                <span className={props.filterProps.allUsers ? styles.selectedItem : styles.restItems}
                    onClick={() => { props.onFilterChanged(false, true, props.filterProps.term) }}>All</span>
                <span className={props.filterProps.friend ? styles.selectedItem : styles.restItems}
                    onClick={() => { props.onFilterChanged(true, false, props.filterProps.term) }}>Friends</span>
                <span className={(!props.filterProps.friend && !props.filterProps.allUsers) ? styles.selectedItem : styles.restItems}
                    onClick={() => { props.onFilterChanged(false, false, props.filterProps.term) }}>Rest</span>
            </div>}
            <SearchReduxForm initialValues={props.filterProps} onSubmit={onSubmit}/>
        </div>      
        <div className={styles.UsersBox}>
            {props.users.map(u => <div>
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


type SearchFormValuesType = {
    term: string
}
type FormPropsType = {
}
type FormKeysType = Extract<keyof SearchFormValuesType, string>;

const SearchForm: React.FC<InjectedFormProps<SearchFormValuesType,
FormPropsType> & FormPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.searchBlock}>
            {createCustomField<FormKeysType>("Type to search", "term", Input, [], styles.searchInput)}
            <button className={styles.searchButton}>Search</button>
    </form>
};
                                            // a unique name for the form
const SearchReduxForm = reduxForm<SearchFormValuesType, FormPropsType>({form: 'searchForm'})(SearchForm);


export default Users;