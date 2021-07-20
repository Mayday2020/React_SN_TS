import React from 'react'
import {ArrayUsersType, UserType} from "../../Redux/store";
import s from './Users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) =>  void
    setUsers: (users: ArrayUsersType) =>  void
}
const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.map( u => {
                    return <div key={u.id} className={s.user}>
                        <div>
                            <div className={s.avatar}>{u.photoUrl}</div>
                            <div>
                                {
                                    u.followed
                                    ? <button onClick={ () => {props.unfollow(u.id)} }>Follow</button>
                                    : <button onClick={ () => {props.follow(u.id)} }>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userInfoLeft}>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.userInfoRight}>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Users