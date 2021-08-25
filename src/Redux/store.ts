
import {addPostCreator, setUserProfile, updateNewPostCreator} from "./profile_reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs_reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleFollowingProgress,
    unfollowSuccess
} from "./users_reducer";
import {setAuthUserData} from "./auth_reducer";

        //  TYPES

export type MessageType = {
    id: number
    message: string
}         //  Dialogs
export type DialogItemType = {
    id: number
    name: string
}
export type DialogPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessageBody: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfileType = {             //  Profile
    aboutMe: null | string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type AuthResponseType = {
    data: AuthResponseDataType
    isAuth: boolean
}
export type AuthResponseDataType = {
    id: number | null,
    email: string | null,
    login: string | null
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
}

export type SidebarType = {}            //  Sidebar

export type NewArrayUsersType = {       //  Users
    error: string
    items: NewUserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type NewUserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebarPage: SidebarType
    usersPage: NewArrayUsersType
    auth: AuthResponseType
}        //  State

export type DispatchPropsType = {
    type: string
    message: string
}   //  Dispatch

        //  ACTIONS

export type ActionsTypes = ReturnType<typeof addPostCreator> |
    ReturnType<typeof updateNewPostCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthUserData>

export type ActionUsers = ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingProgress>

        //  STORE
export type StoreType = {
    _state: RootStateType
    getState: ()=> RootStateType
    addPost: ()=> void
    changeNewText: (newText: string) => void
    _callSubscriber: (state: RootStateType) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: ((state: RootStateType)=>void)) => void
    dispatch:(action: ActionsTypes) => void
}           //  Store

