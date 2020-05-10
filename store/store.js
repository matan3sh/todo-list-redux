import TodoReducer from './reducers/TodoReducer.js';

const { createStore, combineReducers, applyMiddleware, compose } = Redux;

const thunk = ReduxThunk.default;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  TodoReducer,
  composeEnhancers(applyMiddleware(thunk))
);
