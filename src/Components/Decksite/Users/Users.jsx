import React, {} from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import UsersPhoto from '../Contacts/Contacte/Img/User-icon.png'
import {Redirect} from "react-router";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    if (!!props.isAuth) return <Redirect to='/login'/>;
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
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={s.photo} alt='disabled' src={u.photos.small !== null
                                ? u.photos.small
                                : UsersPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.item}>Name: {u.name}</div>
                    <div className={s.item}>Status: {u.status}</div>
                    <div className={s.item}>LastName:</div>
                    <div className={s.item}>Dream:</div>
                    <div className={s.item}>Stack:</div>
                    <div className={s.item}>Country:</div>
                    <div className={s.item}>City:</div>
                    <div className={s.followed}>
                        {u.followed
                            ? <button disabled={props.isDisabledButton.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }} >Unfollow</button>
                            : <button disabled={props.isDisabledButton.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>
                        };
                    </div>
                </div>
            })}
        </div>
    )
}
export default Users;