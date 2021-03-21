import React, {} from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";


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
                        <NavLink to="/profile">
                            <img className={s.photo} alt='disabled' src={u.photos.small}/></NavLink>
                        <NavLink to="/profile">
                            <img className={s.photo} alt='disabled' src={u.photos.large}/></NavLink>
                    </div>
                    <div className={s.item}>Name: {u.name}</div>
                    <div className={s.item}>Status: {u.status}</div>
                    <div className={s.item}> {u.uniqueUrlName}</div>
                    {/*<div className={s.item}>Dream: {'u.dream'}</div>*/}
                    {/*<div className={s.item}>Stack: {'u.stack'}</div>*/}
                    {/*<div className={s.item}>Country: {'u.residence.country'}</div>*/}
                    {/*<div className={s.item}>City: {'u.residence.city'}</div>*/}
                    <div className={s.followed}>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </div>
            })}
        </div>
    )
}
export default Users;