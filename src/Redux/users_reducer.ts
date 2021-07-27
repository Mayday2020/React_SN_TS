import {ActionUsers, NewArrayUsersType, NewUserType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState: any = {
    items: []
}

const usersReducer = (state: NewArrayUsersType = initialState, action: ActionUsers) => {
    switch (action.type){
        case FOLLOW : {
            return { ...state, users: state.items.map((u: any) => {
                if(u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
                })}
        }
        case UNFOLLOW :{
            return { ...state, users: state.items.map((u: any) => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })}
        }
        case SET_USERS : {
            return {...state, items: [...action.items]}
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
export const setUsersAC = (items: NewUserType[]) => {
    return {type: SET_USERS, items: items} as const
}
export default usersReducer