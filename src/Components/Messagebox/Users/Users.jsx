import React, {} from 'react';
import s from "./Users.module.css";


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
                    followed: false,
                    fullName: 'Jason Statham',
                    age: 40,
                    work: 'Officer',
                    dream: 'Frontend developer',
                    stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
                    residence: {country: 'USA', city: 'New York'}
                },
                {
                    id: 2,
                    coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
                    followed: true,
                    fullName: 'Jason Statham',
                    age: 40,
                    work: 'Officer',
                    dream: 'Frontend developer',
                    stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
                    residence: {country: 'USA', city: 'New York'}
                },
                {
                    id: 3,
                    coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
                    followed: false,
                    fullName: 'Jason Statham',
                    age: 40,
                    work: 'Officer',
                    dream: 'Frontend developer',
                    stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
                    residence: {country: 'USA', city: 'New York'}
                },
                {
                    id: 4,
                    coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
                    followed: true,
                    fullName: 'Jason Statham',
                    age: 40,
                    work: 'Officer',
                    dream: 'Frontend developer',
                    stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
                    residence: {country: 'USA', city: 'New York'}
                }
            ]
        )
    }

    // const UserItem = (props) => {
    //     return (
    //         <div>
    //             <div className={s.item}><img alt='disabled'
    //                                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU'/>
    //             </div>
    //             <div className={s.item}>{props.fullName}</div>
    //             <div className={s.item}> {props.age}</div>
    //             <div className={s.item}>{props.work}</div>
    //             <div className={s.item}>{props.dream}</div>
    //             <div className={s.item}>{props.stack}</div>
    //             <div className={s.item}>{props.residence.city}</div>
    //             <div className={s.item}> {props.followed}</div>
    //         </div>
    //     );
    // }
    // let UsersElements = props.users.map(u => <UserItem
    //     coverFotosUrl={u.coverPhotosUrl} id={u.id} fullName={u.fullName}
    //     followed={u.followed} dream={u.dream}
    //     age={u.age} work={u.work} stack={u.stack}
    //     residence={u.residence.city}/>);

    return <div className={s.users}>{
        props.users.map(u =>
            <div className={s.user} key={u.id}>
                <div><img className={s.photo} alt='disabled' src={u.coverPhotosUrl}/>
                    <div className={s.followed}>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </div>
                <div>
                    <div className={s.item}>{u.fullName}</div>
                    <div className={s.item}>{u.age}</div>
                    <div className={s.item}>{u.work}</div>
                    <div className={s.item}>{u.dream}</div>
                    <div className={s.item}>{u.stack}</div>
                    <div className={s.item}>{u.residence.country}</div>
                    <div className={s.item}>{u.residence.city}</div>
                </div>
            </div>
        )
    }
    </div>

}
export default Users;
// {/*// <div>{UsersElements}</div>// <div>{u.fullName}{u.work}</div>*/}