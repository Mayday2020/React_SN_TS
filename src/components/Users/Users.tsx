import React from 'react'
import {NewUserType} from "../../Redux/store";
import s from './Users.module.css'
import axios from "axios";

type mapStatePropsType = {
    items: NewUserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: NewUserType[]) => void
    setCurrentPage: (page: number) =>void
    setTotalUsersCount: (totalCount: number)=> void
}
type UsersPropsType = mapStatePropsType & mapDispatchPropsType

class Users extends React.Component<UsersPropsType, any>{
    componentDidMount() {
        //alert('server request')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount / 100)  // делим на 100 т.к. пользователей 13750шт
        });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount / 100)  // делим на 100 т.к. пользователей 13750шт
        });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i ++){
            pages.push(i);
        }
        return <div>
            <div className={s.content_image}>Users Image</div>
            <div className={s.pageNumbers}>
                { pages.map( p => <span className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={()=>{this.onPageChanged(p)}}>{p} </span>)}
            </div>
            <div className={s.wrapper}>
                {
                    this.props.items.map(u  => {
                        return <div key={u.id} className={s.user}>
                            <div>
                                {u.photos.small !== null ? u.photos.small : <div className={s.avatar}>AVA</div>}
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}>Follow</button>
                                            : <button onClick={() => {
                                                this.props.follow(u.id)
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
}

export default Users