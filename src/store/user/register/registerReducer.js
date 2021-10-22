import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../actionTypes";

export const userRegisterReducer =(state={}, action)=>{
    
    switch (action.type) {
        case USER_REGISTER_REQUEST:
          return {
            loading: true,
            token: null,
            success: false,
          };
        case USER_REGISTER_SUCCESS:
        
          return {
            ...state,
            loading: false,
            message: action.payload.message,
            code: action.payload.code,
            success: true,
          };
        case USER_REGISTER_FAIL:
          return {
            loading: false,
            error: action.payload,
            success: false,
          };
    
       
    
        default:
          return state;
      }
}