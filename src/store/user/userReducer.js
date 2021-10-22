import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actionTypes";
export const userReducer =(state={}, action)=>{
    
    switch (action.type) {
        case USER_LOGIN_REQUEST:
          return {
            loading: true,
            token: null,
            success: false,
          };
        case USER_LOGIN_SUCCESS:
            console.log(action.payload);
          return {
            ...state,
            loading: false,
            // token: action.payload.token,
            // user: action.payload.user,
            // message: action.payload.msg,
            success: true,
          };
        case USER_LOGIN_FAIL:
          return {
            loading: true,
            error: action.payload,
            success: false,
          };
    
       
    
        default:
          return state;
      }
}