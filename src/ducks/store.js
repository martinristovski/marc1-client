import { combineReducers, createStore } from 'redux'
import AuthReducer from './auth';

const rootReducer = combineReducers({
  auth: AuthReducer
})

const store = createStore(rootReducer)

export default store;
