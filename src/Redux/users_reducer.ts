import {ActionUsers, NewArrayUsersType, NewUserType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

let initialState: any = {
    items: [],
    pageSize: 7,
    totalCount: 0,
    currentPage: 1
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
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS_COUNT : {
            return {...state, totalCount: action.totalCount}
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
export const setCurrentPageAC = (page: number) => {
    return {type: SET_CURRENT_PAGE, page} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount} as const
}
export default usersReducer