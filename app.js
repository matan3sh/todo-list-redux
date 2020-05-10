import { App } from './App.jsx';
import { store } from './store/store.js';

const Router = ReactRouterDOM.HashRouter;
const history = History.createHashHistory();

const { Provider } = ReactRedux;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
