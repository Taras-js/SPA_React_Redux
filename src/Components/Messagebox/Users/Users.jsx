import React, {} from 'react';
import s from "./Users.module.css";


const Users = (props) => {
    const UserItem = (props) => {
        return (
            <div>
                <div className={s.item}><img alt='disabled' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU'>{props.coverPhotosUrl}</img></div>
                <div className={s.item}>{props.fullName}</div>
                <div  className={s.item}> {props.age}</div>
                <div className={s.item}>{props.work}</div>
                <div className={s.item}>{props.dream}</div>
                <div className={s.item}>{props.stack}</div>
                <div className={s.item}>{props.residence.city}</div>
                <div className={s.item}> {props.followed}</div>
            </div>
        );
    }
    let UsersElements = props.users.map(u => <UserItem
        coverFotosUrl={u.coverPhotosUrl} id={u.id} fullName={u.fullName}
        followed={u.followed} dream={u.dream}
        age={u.age} work={u.work} stack={u.stack}
        residence={u.residence.city}/>);
    return (
        <div>{UsersElements}</div>
    )
}
export default Users;