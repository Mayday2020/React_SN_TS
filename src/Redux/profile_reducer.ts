import {ActionsTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type){
        case ADD_POST:
            let newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.message;
            return state
        default : return state
    }
}
export const addPostCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
};
export const updateNewPostCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, message: text} as const
};
export default profileReducer