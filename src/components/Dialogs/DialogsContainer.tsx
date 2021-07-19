import React from "react";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/store";
import {ActionCreator} from "redux";

/*const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            store => {
                let newMessageBody = store._state.dialogsPage.newMessageBody;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator(newMessageBody))
                }
                let onNewMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageBodyCreator(text))
                }
                return <Dialogs dialogs={store.getState().dialogsPage}
                                updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}/>
            }
        }
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: ()=>{
            dispatch(sendMessageCreator())
        },
        sendMessage: (body: string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;