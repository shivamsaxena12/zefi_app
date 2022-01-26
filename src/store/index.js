import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Reducers
import userReducer from './user/reducer';

const UnpersistedReducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

/** -------------------Added Middleware for actions----------------------- **/

const configureMiddlewares = () => {
  const middleware = [thunk];

  return middleware;
};

/** ------------------Configure redux persist----------------------------**/

const configurePersistStore = () => {
  const persistedReducer = persistReducer(persistConfig, UnpersistedReducers);

  return persistedReducer;
};

/** -------------------Create Store-------------------------------------- **/

const configureStore = () => {
  const middlewares = configureMiddlewares();
  const persistReducers = configurePersistStore();

  let store = createStore(
    persistReducers,
    compose(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);

  return {store, persistor};
};

export const persistantStore = configureStore();
export default configureStore;
