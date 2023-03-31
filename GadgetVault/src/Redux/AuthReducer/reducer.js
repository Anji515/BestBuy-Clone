import { SignIn_Success, SignUp_Failure, SignUp_Request, SignUp_Success } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    auth: false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SignUp_Request:
            return { ...state, isLoading: true }
        case SignUp_Success:
            return { ...state, isLoading: false }
        case SignUp_Failure:
            return { ...state, isLoading: false, isError: true }
        case SignIn_Success:
            return { ...state, isLoading: false, auth: true, UserName: payload }
        default:
            return state
    }
}