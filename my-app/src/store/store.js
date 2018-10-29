import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer and sagas
import rootReducer from './reducers/index';
import rootSaga from './sagas'

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// compose store enhancers
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(
  rootReducer,
  enhancers
);

// run sagas
sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
