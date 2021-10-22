import httpClient from "axios";
import { registerURL } from "../../../utils/proxyUrl";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../actionTypes";


const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export const register = (username, email, password) => async (dispatch) =>{
    try {
        dispatch({type: USER_REGISTER_REQUEST})

        const res = await httpClient.post(registerURL, {username, email, password}, config)
        
        if (!res || !res.data) {
            dispatch({ type: USER_REGISTER_FAIL, error: res.data })
        }
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
        return res.data
    } catch (error) {
        if(error.response.data){
            dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data })
            return error.response.data
        }else {

            dispatch({ type: USER_REGISTER_FAIL, payload: error })
            return error
        } 
        
        
    }
}