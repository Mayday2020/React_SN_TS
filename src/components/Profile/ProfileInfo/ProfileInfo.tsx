import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/store";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {Dispatch} from "redux";
type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.profileInfo}>
                { props.profile.photos.small
                    ? <img className={s.user_image} alt={'ava'} src={props.profile.photos.small}/>
                    : <div className={s.user_ava}>AVA</div> }
                <div>
                    <div>Name: {props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;