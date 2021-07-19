import React from "react";
import {RootStateType} from "../../../Redux/store";
import {addPostCreator, updateNewPostCreator} from "../../../Redux/profile_reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        postsElements: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPosts: ()=>{
            dispatch(addPostCreator())
        },
        onPostChange:(text: string)=>{
            let action = updateNewPostCreator(text)
            dispatch(action)
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;