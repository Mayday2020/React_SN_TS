import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/store";
import Preloader from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            { props.profile.photos.small
                ? <img className={s.user_image} alt={'ava'} src={props.profile.photos.small}/>
                : <div className={s.user_ava}>AVA</div> }
            <div>
                <div>Name: {props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;