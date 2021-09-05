import React, {ChangeEvent} from 'react';
import {Dispatch} from "redux";

type StatusPropsType = {
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}
class ProfileStatus extends React.Component<StatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState(
            {editMode: true}
        )
    }
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status)
        this.setState(
            {editMode: false}
        )
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
       return(
            <div>
                {!this.state.editMode
                ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || this.props.status}</span>
                    </div>
                : <div>
                        <input autoFocus
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                        onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;