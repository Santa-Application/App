import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import regularPost from './regularPost';
import recruitPost from './recruitPost';
import auth from './auth';
import mountain from './mountain';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  // whitelist: ['auth'], -> 이것만 넣겠다
  // blacklist -> 이것만 제외하겠다
};

const rootReducer = combineReducers({
  regularPost,
  recruitPost,
  auth,
  mountain,
});

export default persistReducer(persistConfig, rootReducer);
