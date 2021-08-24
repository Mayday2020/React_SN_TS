import {ActionUsers, NewArrayUsersType, NewUserType} from "./store";
import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS"

let initialState: NewArrayUsersType = {
    items: [],
    error: '',
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_FOLLOWING_PROGRESS : {
            return {...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default : return state
    }
}
export const followSuccess = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}
export const unfollowSuccess = (userId: number) => {
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
export const toggleFollowingProgress = (inProgress: boolean, userId: number) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, inProgress, userId} as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: (AC: ActionUsers) => void) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount / 60))  // делим на 60 т.к. пользователей 13750шт
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: (AC: ActionUsers) => void) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: (AC: ActionUsers) => void) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export default usersReducer