import React from "react";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

const DialogsContainer = () => {
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
}
export default DialogsContainer;