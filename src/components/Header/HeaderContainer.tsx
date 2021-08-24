import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth_reducer";
import {usersAPI} from "../../api/api";

type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string)=>void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type PropsType = MapDispatchPropsType & MapStatePropsType;

class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        usersAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: any)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);