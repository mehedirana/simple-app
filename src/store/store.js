import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userRegisterReducer } from './user/register/registerReducer';
import { profileReducer } from './user/profile/profileUpdateReducer';
import { userReducer } from './user/authentication/userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    userRegister: userRegisterReducer,
    profile: profileReducer 
})

const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 3000,
    hostname: "59.153.101.167",
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))