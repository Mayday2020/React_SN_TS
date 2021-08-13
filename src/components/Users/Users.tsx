import React from "react";
import s from './Users.module.css'
import {NewUserType} from "../../Redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersProp = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    items: NewUserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}
const Users = (props: UsersProp) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={s.content_image}>Users Image</div>
        <div className={s.pageNumbers}>
            {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : ''}
                                  onClick={() => {
                                      props.onPageChanged(p)
                                  }}
                                  key={p}>{p} </span>)}
        </div>
        <div className={s.wrapper}>
            {
                props.items.map(u => {
                    return <div key={u.id} className={s.user}>
                        <div className={s.avatarBlock}>
                            <NavLink to={'/profile/' + u.id}>
                                {u.photos.small !== null
                                    ? <div >
                                        <img className={s.avatarImage} src={u.photos.small} alt="AVA"/>
                                    </div>
                                    : <div className={s.avatar}>AVA</div>}
                            </NavLink>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {withCredentials: true,
                                                headers: {
                                                    "API-KEY": "384f94cc-cf72-4620-8708-46f29f032232"
                                                }})
                                                .then(response => {
                                                    if (response.data.resultCode === 0){
                                                        props.unfollow(u.id);
                                                    }
                                                });
                                        }}>Follow</button>

                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {}, {withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "384f94cc-cf72-4620-8708-46f29f032232"
                                                    }})
                                                .then(response => {
                                                    if (response.data.resultCode === 0){
                                                        props.follow(u.id);
                                                    }
                                                });
                                        }}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userInfoLeft}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.userInfoRight}>
                                <div>{'city'}</div>
                                <div>{'country'}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Users