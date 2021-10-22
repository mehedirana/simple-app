import httpClient from "axios";
import { loginURL } from "../../utils/proxyUrl";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actionTypes";


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
        // const { token, user_email, user_nicename, user_display_name } = res.data;
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: USER_LOGIN_FAIL, error: error })
    }
}