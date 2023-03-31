import axios from "axios"
import { SignIn_Success, SignUp_Failure, SignUp_Request, SignUp_Success } from "./actionTypes"

export const SignUp = (userData) => (dispatch) => {
    dispatch({ type: SignUp_Request })
    return axios.post('https://backend-for-gadgetvault-qf1o.onrender.com/Users', userData).then(() => {
        dispatch({ type: SignUp_Success })
    }).catch(() => {
        dispatch({ type: SignUp_Failure })
    })
}
export const SignIn = (email, password) => (dispatch) => {
    dispatch({ type: SignUp_Request })
    return axios.get(`https://backend-for-gadgetvault-qf1o.onrender.com/Users?email=${email}&password=${password}`).then((res) => {
        if (res.data.length > 0) {
            dispatch({ type: SignIn_Success, payload: res.data[0].name })
            return true
        } else {
            dispatch({ type: SignUp_Failure })
            return false
        }
    })
}