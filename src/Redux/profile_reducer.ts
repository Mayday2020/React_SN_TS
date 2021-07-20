import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 30 },
        { id: 2, message: "It's my first post.", likesCount: 17 },
        { id: 3, message: "Please, like this comment))", likesCount: 91 }
    ],
    newPostText: 'it-kamasutra.com'
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
        default : return state
    }
}
export const addPostCreator = () => {
    return {type: ADD_POST} as const
};
export const updateNewPostCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, message: text} as const
};
export default profileReducer