import { App } from './App.jsx';
import TodoReducer from './reducers/TodoReducer.js';

const Router = ReactRouterDOM.HashRouter;
const history = History.createHashHistory();

const { createStore } = Redux;
const { Provider } = ReactRedux;

let store = createStore(TodoReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
