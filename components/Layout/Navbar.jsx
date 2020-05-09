import ProgressBar from '../Layout/ProgressBar.jsx';

const { connect } = ReactRedux;
const { NavLink, Link } = ReactRouterDOM;

const Navbar = ({ title, icon, user }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <div>
        <ProgressBar />
      </div>
      <ul>
        {user !== null ? (
          <li>
            Hello,{' '}
            <NavLink activeClassName='nav-active' to='/user' exact>
              <span style={{ fontWeight: 'bolder' }}>{user.fullName}</span>
            </NavLink>
          </li>
        ) : (
          ''
        )}
        <li>
          <NavLink activeClassName='nav-active' to='/' exact>
            <span>Todos</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'TodoList',
  icon: 'fas fa-list-alt',
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
