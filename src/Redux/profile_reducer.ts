import {ActionsTypes, ProfilePageType, ProfileType} from "./store";
import {usersAPI} from "../api/api";
import {toggleIsFetching} from "./users_reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 30 },
        { id: 2, message: "It's my first post.", likesCount: 17 },
        { id: 3, message: "Please, like this comment))", likesCount: 91 }
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    { id: new Date().getTime(),
                    message: state.newPostText,
                    likesCount: 0 }
                ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.message
            }
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        default : return state
    }
}
export const addPostCreator = () => {
    return {type: ADD_POST} as const
};
export const updateNewPostCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, message: text} as const
};
export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
};
export const getUserProfile = (userId: string) => (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUserProfile(data))
        });
}
export default profileReducer