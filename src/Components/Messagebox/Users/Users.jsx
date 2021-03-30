import React, {} from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../API/api";
import Usersphoto from '../Contacts/Contacte/Img/3AlT.gif'
const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && s.selectedPage}
                                   onClick={() => {
                                       props.onPageChanged(p);
                                   }}>{p}</button>
                })}
            </div>
            {props.users.map(u => {
                return <div className={s.user} key={u.id}>
                    <div>
                        <NavLink to={`/profile/${ u.id}`}>
                            <img className={s.photo} alt='disabled' src={u.photos.small !== null
                                ? u.photos.small
                                : Usersphoto }/>
                        </NavLink>
                    </div>
                    <div className={s.item}>Name: {u.name}</div>
                    <div className={s.item}>Status: {u.status}</div>
                    <div className={s.item}>uniqueUrlName:</div>
                    <div className={s.item}>Dream:</div>
                    <div className={s.item}>Stack:</div>
                    <div className={s.item}>Country:</div>
                    <div className={s.item}>City:</div>
                    <div className={s.followed}>
                        {u.followed
                            ? <button disabled={props.isDisabledButton.some(id => id === u.id)} onClick={() => {
                                props.disableButton(true, u.id)
                                usersAPI.unfollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollowUpsuccess(u.id);
                                        }
                                        props.disableButton(false, u.id)
                                    });
                            }}>Unfollow</button>

                            : <button disabled={props.isDisabledButton.some(id => id === u.id)} onClick={() => {
                                props.disableButton(true, u.id)
                                usersAPI.follow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.followUpsuccess(u.id);
                                        }
                                        props.disableButton(false, u.id)
                                    });
                            }}>Follow</button>};
                    </div>
                </div>
            })}
        </div>
    )
}
export default Users;