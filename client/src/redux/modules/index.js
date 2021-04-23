import { combineReducers } from 'redux';
import regularPost from './regularPost';
import recruitPost from './recruitPost';
import auth from './auth';

const rootReducer = combineReducers({
  regularPost,
  recruitPost,
  auth,
});

export default rootReducer;
