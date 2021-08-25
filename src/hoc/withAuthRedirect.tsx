import React from 'react';
import {Redirect} from "react-router-dom";
import {RootStateType} from "../Redux/store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

const WithAuthRedirect = (Component:any) => {
    let RedirectComponent = (props: any)=>{
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
};

export default WithAuthRedirect;