import React, {} from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i);}
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
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.photo} alt='disabled' src={u.photos.small}/>
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
                            ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "983ef69e-fb02-4dae-9cd8-71dddb6f6669"
                                }})
                                .then(response => {
                                if (response.data.resultCode === 0)
                                {
                                    props.unfollow(u.id);}
                                                            });
                        }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { }, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "983ef69e-fb02-4dae-9cd8-71dddb6f6669"
                                    }})
                                    .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }

                                });
                            }}>Follow</button>};
                    </div>
                </div>
            })}
        </div>
    )
}
export default Users;