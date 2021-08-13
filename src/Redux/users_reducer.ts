import {ActionUsers, NewArrayUsersType, NewUserType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState: NewArrayUsersType = {
    items: [],
    error: '',
    pageSize: 7,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state: NewArrayUsersType = initialState, action: ActionUsers) => {
    switch (action.type){
        case FOLLOW : {
            return { ...state, items: state.items.map((u) => {
                if(u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
                })}
        }
        case UNFOLLOW :{
            return { ...state, items: state.items.map((u) => {
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
        case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.spin}
        }
        default : return state
    }
}
export const follow = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}
export const unfollow = (userId: number) => {
    return {type: UNFOLLOW, userId: userId} as const
}
export const setUsers = (items: NewUserType[]) => {
    return {type: SET_USERS, items: items} as const
}
export const setCurrentPage = (page: number) => {
    return {type: SET_CURRENT_PAGE, page} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount} as const
}
export const toggleIsFetching = (spin: boolean) => {
    return {type: TOGGLE_IS_FETCHING, spin} as const
}
export default usersReducer