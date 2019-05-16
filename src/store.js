import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { eventsMiddleware } from './middlewares';
import { INITIAL_STATE } from './constants';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [];
const configureStore = () => {
  const store = createStore(
    rootReducer,
    INITIAL_STATE,
    // compose(applyMiddleware(...middleware), f => f),
  );
  // sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
