
export type StoreType = {
    _state: RootStateType
    getState: ()=> RootStateType
    addPost: ()=> void
    changeNewText: (newText: string) => void
    _callSubscriber: (state: RootStateType) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: ((state: RootStateType)=>void)) => void
    dispatch:(action: ActionsTypes) => void
}
export type MessageType = {
    id: number
    message: string
}
export type DialogItemType = {
    id: number
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type DialogPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessageBody: string
}
type SidebarType = {}
export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type DispatchPropsType = {
    type: string
    message: string
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof sendMessageCreator>

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
        if(action.type === ADD_POST){
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.message;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    }
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export const addPostActionCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
};
export const updateNewPostActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, message: text} as const
};

export const updateNewMessageBodyCreator = (body: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const
}
export const sendMessageCreator = (body: string) => {
    return {type: SEND_MESSAGE, body: body} as const
}

export default store;
/*window.store = store;*/
