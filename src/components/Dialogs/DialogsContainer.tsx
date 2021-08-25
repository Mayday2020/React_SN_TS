
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;