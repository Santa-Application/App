import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

const middlewares = [ReduxThunk, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

const StoreProvider = props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
);

export default StoreProvider;
