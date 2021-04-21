import { combineReducers } from 'redux';
import regularPost from './regularPost';
import recruitPost from './recruitPost';

const rootReducer = combineReducers({ regularPost, recruitPost });

export default rootReducer;
