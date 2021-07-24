import React from 'react'
import {NewUserType} from "../../Redux/store";
import s from './Users.module.css'
import axios from "axios";

type UsersPropsType = {
    items: NewUserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: NewUserType[]) => void
}
const Users = (props: UsersPropsType) => {
    if (props.items.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }
    return (
        <div>
            <div className={s.content_image}>Users Image</div>
            <div className={s.wrapper}>
                {
                    props.items.map(u => {
                        return <div key={u.id} className={s.user}>
                            <div>
                                {u.photos.small !== null ? u.photos.small : <div className={s.avatar}>AVA</div>}
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Follow</button>
                                            : <button onClick={() => {
                                                props.follow(u.id)
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
    )
}

export default Users