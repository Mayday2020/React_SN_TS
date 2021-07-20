import {ActionsTypes, DialogPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}
const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE : {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            }
        }
        default : return state
    }
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const
}
export const sendMessageCreator = (body: string) => {
    return {type: SEND_MESSAGE, body: body} as const
}
export default dialogsReducer