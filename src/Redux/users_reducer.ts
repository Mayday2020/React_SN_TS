import {ActionUsers, ArrayUsersType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"




let initialState: ArrayUsersType = {
    users: [
        {id: 1, photoUrl: 'AVA', followed: true, fullName: 'Dmitry', status: 'Learning React', location: {country: 'Russia', city: 'Moscow'}},
        {id: 2, photoUrl: 'AVA', followed: false, fullName: 'Daniel', status: 'Eating...', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 3, photoUrl: 'AVA', followed: true, fullName: 'Vlad', status: 'Sleeping...Zzz...zzz', location: {country: 'Ukrane', city: 'Kiev'}}
    ]
}
const usersReducer = (state: ArrayUsersType = initialState, action: ActionUsers) => {
    switch (action.type){
        case FOLLOW : {
            return { ...state, users: state.users.map((u: any) => {
                if(u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
                })}
        }
        case UNFOLLOW :{
            return { ...state, users: state.users.map((u: any) => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })}
        }
        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users.users]}
        }
        default : return state
    }
}
export const followAC = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId: userId} as const
}
export const setUsersAC = (users: ArrayUsersType) => {
    return {type: SET_USERS, users: users} as const
}
export default usersReducer