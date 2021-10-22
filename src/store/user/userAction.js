import httpClient from "axios";
import { loginURL, registerURL } from "../../utils/proxyUrl";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../actionTypes";


const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const res = await httpClient.post(loginURL, { username, password }, config)

        if (!res || !res.data || !res.data.token) {
            dispatch({ type: USER_LOGIN_FAIL, error: res.data })
        }

        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })

    } catch (error) {
        if (error.response.data) {
            dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data })
            return error.response.data
        } else {
            dispatch({ type: USER_LOGIN_FAIL, error: error })
            return error
        }
    }
}

export const logout = () => async (dispatch) => {
    dispatch({
        type: USER_LOGOUT_SUCCESS,
    });

};