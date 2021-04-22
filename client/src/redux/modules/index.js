import { combineReducers } from 'redux';
import regularPost from './regularPost';
import recruitPost from './recruitPost';
import { registerReducer, signinReducer } from './auth';

const rootReducer = combineReducers({ 
  regularPost, 
  recruitPost, 
  registerReducer,
  signinReducer
});

export default rootReducer;
