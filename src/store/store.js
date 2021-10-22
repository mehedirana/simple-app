import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './user/userReducer';


const rootReducer = combineReducers({
    user: userReducer
})

const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 3000,
    hostname: "192.168.112.173",
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))