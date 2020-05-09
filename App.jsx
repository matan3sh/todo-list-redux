import TodoApp from './pages/TodoApp.jsx';
import Navbar from './components/Layout/Navbar.jsx';
import UserProfile from './pages/UserProfile.jsx';

const { Switch, Route } = ReactRouterDOM;

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route component={TodoApp} exact path='/' />
            <Route component={UserProfile} exact path='/user' />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
