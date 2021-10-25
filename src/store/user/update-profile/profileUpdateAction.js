import axios from "axios"
import { userProfileURL } from "../../../utilites/proxyUrl"
import { GET_ACCOUNT_DETAILS_FAIL, GET_ACCOUNT_DETAILS_REQUEST, GET_ACCOUNT_DETAILS_SUCCESS } from "../../actionTypes"

export const profile = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
        };
        dispatch({ type: GET_ACCOUNT_DETAILS_REQUEST })

        const res = await axios.post(userProfileURL, config)

        if (!res || !res.data) {
            dispatch({ type: GET_ACCOUNT_DETAILS_FAIL, error: res.data })
        }
        dispatch({ type: GET_ACCOUNT_DETAILS_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: GET_ACCOUNT_DETAILS_FAIL, payload: error })
    }
}