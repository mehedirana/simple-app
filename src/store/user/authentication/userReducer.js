import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS } from "../../actionTypes";
export const userReducer = (state = {}, action) => {

  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        token: null,
        success: false,
      };
    case USER_LOGIN_SUCCESS:

      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user_display_name: action.payload.user_display_name,
        user_email: action.payload.user_email,
        user_nicename: action.payload.user_nicename,
        success: true,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };


    case USER_LOGOUT_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        success: false,
        token: null,
      };



    default:
      return state;
  }
}