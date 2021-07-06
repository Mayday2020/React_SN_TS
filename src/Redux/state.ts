
import profileReducer, {addPostCreator, updateNewPostCreator} from "./profile_reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

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
}            //  Profile
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type SidebarType = {}            //  Sidebar

export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}        //  State

export type DispatchPropsType = {
    type: string
    message: string
}   //  Dispatch

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

        //  ACTIONS

export type ActionsTypes = ReturnType<typeof addPostCreator> |
    ReturnType<typeof updateNewPostCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof sendMessageCreator>

        //  STORE

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 30 },
                { id: 2, message: "It's my first post.", likesCount: 17 },
                { id: 3, message: "Please, like this comment))", likesCount: 91 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Ashley'},
                {id: 4, name: 'Victory'},
                {id: 5, name: 'Helen'}
            ],
            messages: [
                {id: 1, message: 'Is that u, Alex Clare?'},
                {id: 2, message: 'Boooob?! Do somethink!!!'},
                {id: 3, message: 'Not of your business'},
                {id: 4, message: 'Not of your business'},
                {id: 5, message: 'Not of your business'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState(){
      return this._state
    },
    addPost(){
        let newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    changeNewText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    _callSubscriber(state){
        console.log('State changed')
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
        console.log('subscribe')
    },
    dispatch(action){  /*  action = {}  */
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}





export default store;
/*window.store = store;*/
