import React from "react";
import {StoreType} from "../../../Redux/store";
import {addPostCreator, updateNewPostCreator} from "../../../Redux/profile_reducer"
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store: StoreType) => {
                let state = store.getState();
                const addPost = ()=>{
                    store.dispatch(addPostCreator(store._state.profilePage.newPostText))
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts addPosts={addPost}
                                postsElements={state.profilePage.posts}
                                onPostChange={onPostChange}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;