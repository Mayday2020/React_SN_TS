import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../Redux/auth_reducer";
import {authAPI} from "../../api/api";

type MapDispatchPropsType = {
    getAuthUserData: ()=>void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type PropsType = MapDispatchPropsType & MapStatePropsType;

class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: any)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);