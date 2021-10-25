import { ACCOUNT_UPDATE_FAIL, ACCOUNT_UPDATE_REQUEST, ACCOUNT_UPDATE_SUCCESS, GET_ACCOUNT_DETAILS_FAIL, GET_ACCOUNT_DETAILS_REQUEST, GET_ACCOUNT_DETAILS_SUCCESS } from "../../actionTypes"

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACCOUNT_DETAILS_REQUEST:
            return {
                success: false,
                loading: true,
            }
        case GET_ACCOUNT_DETAILS_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                userProfile: action.payload,
                msg: null
            }
        case GET_ACCOUNT_DETAILS_FAIL:
            return {
                success: false,
                loading: false,
                error: action.payload,
            }
        case ACCOUNT_UPDATE_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }
        case ACCOUNT_UPDATE_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                userProfile: action.payload,
                msg: 'Profile Update Successfully'
            }
        case ACCOUNT_UPDATE_FAIL:
            return {
                ...state,
                success: false,
                loading: false,
                error: action.payload,
                msg : 'Profile Update Failed'
            }


        default:
           return  state;
    }
}