
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/store";
import React from "react";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (body: string)=>{
            dispatch(sendMessageCreator(body))
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
