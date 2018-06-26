import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import rootSaga from '../utils/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const initializeStore = () => {
  const composeEnhancers =
  /* eslint-disable no-underscore-dangle */
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  /* eslint-disable no-underscore-dangle */
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'MyApp',
      actionsBlacklist: ['REDUX_STORAGE_SAVE'],
    })
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(createReducer(), enhancer);
  sagaMiddleware.run(rootSaga);

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
}

export default initializeStore
