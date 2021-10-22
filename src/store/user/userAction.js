import httpClient from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actionTypes";
const loginURL = 'https://apptest.dokandemo.com/wp-json/jwt-auth/v1/token';

const config = {
    headers: {
    'Content-Type': 'application/json',
    }
  };

export const login =async(username, password)=> (dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQUEST});

        const res = await httpClient.post(loginURL,{username, password}, config)

        if(!res || !res.data || !res.data.token){
           dispatch({type: USER_LOGIN_FAIL, error: res.data})
        }
        dispatch({type: USER_LOGIN_SUCCESS, payload: res.data})

    } catch (error) {
        console.log(error);
        dispatch({type: USER_LOGIN_FAIL, error: error})
    }
}