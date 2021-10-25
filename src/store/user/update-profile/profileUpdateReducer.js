import { ACCOUNT_UPDATE_FAIL, ACCOUNT_UPDATE_REQUEST, ACCOUNT_UPDATE_SUCCESS, GET_ACCOUNT_DETAILS_FAIL, GET_ACCOUNT_DETAILS_REQUEST, GET_ACCOUNT_DETAILS_SUCCESS } from "../../actionTypes"

export const profileReducer =(state={}, action)=>{
    switch (action.type) {
        case GET_ACCOUNT_DETAILS_REQUEST :
            return {

            }
        case GET_ACCOUNT_DETAILS_SUCCESS :
            return {

            }
        case GET_ACCOUNT_DETAILS_FAIL :
            return {

            }
        case ACCOUNT_UPDATE_REQUEST :
            return {

            }
        case ACCOUNT_UPDATE_SUCCESS :
            return {

            }
        case ACCOUNT_UPDATE_FAIL :
            return {

            }
    
    
        default:
            state;
    }
}