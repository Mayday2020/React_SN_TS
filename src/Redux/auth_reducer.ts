import {ActionsTypes, AuthResponseDataType} from "./store";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

type InitialStateType = {
    data: AuthResponseDataType
    isAuth: boolean
}
let initialState: InitialStateType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default : return state
    }
}
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {userId, email, login}} as const
}
export const getAuthUserData = () => (dispatch: (AC: ActionsTypes) => void) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }

export default authReducer