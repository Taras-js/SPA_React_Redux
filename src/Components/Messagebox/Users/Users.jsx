import React, {} from 'react';
import s from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render(props) {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     this.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {this.props.users.map(u => {
                return <div className={s.user} key={u.id}>
                    <div>
                        <img className={s.photo} alt='disabled' src={u.photos.small}/>
                    </div>
                    <div className={s.item}>Name: {u.name}</div>
                    <div className={s.item}>Age: {u.status}</div>
                    <div className={s.item}>Work: {u.uniqueUrlName}</div>
                    <div className={s.item}>Dream: {'u.dream'}</div>
                    <div className={s.item}>Stack: {'u.stack'}</div>
                    <div className={s.item}>Country: {'u.residence.country'}</div>
                    <div className={s.item}>City: {'u.residence.city'}</div>
                    <div className={s.followed}>
                        {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </div>

            })}
        </div>

    }
}

export default Users;