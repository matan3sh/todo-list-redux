import userService from '../services/userService.js';
import { updateUser } from '../actions/TodoActions.js';

const { connect } = ReactRedux;

class UserProfile extends React.Component {
  state = { fullName: '', bgColor: '', color: '' };

  componentDidMount() {
    if (this.props.user !== null)
      this.setState({
        fullName: this.props.user.fullName,
        bgColor: this.props.user.prefs.bgColor,
        color: this.props.user.prefs.color,
      });
    else this.setState({ fullName: '', bgColor: '', color: '' });
  }

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSumbit = (e) => {
    e.preventDefault();
    const { color, bgColor } = this.state;
    const user = {
      fullName: this.state.fullName,
      activitis: this.props.user.activitis,
      prefs: { color, bgColor },
    };
    this.props.updateUser(user);
    userService.update(user);
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        {user === null ? (
          <h1>Loading...</h1>
        ) : (
          <div
            className='card my-3 grid-user-profile'
            style={{
              backgroundColor: `${user.prefs.bgColor}`,
              color: `${user.prefs.color}`,
            }}
          >
            <div>
              <i className='fas fa-id-card-alt fa-9x'></i>
            </div>
            <div className='flex-center'>
              <form className='mx-1' onSubmit={this.onSumbit}>
                <div className='flex-center'>
                  <span>Background:</span>
                  <input
                    type='color'
                    name='bgColor'
                    value={this.state.bgColor}
                    onChange={this.onChange}
                  />{' '}
                  <span style={{ marginLeft: '10px' }}>Text:</span>
                  <input
                    type='color'
                    name='color'
                    value={this.state.color}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type='text'
                  name='fullName'
                  value={this.state.fullName}
                  placeholder='Your Name'
                  onChange={this.onChange}
                />
                <input
                  type='submit'
                  value='Update'
                  className='btn btn-primary mx-1'
                  onSubmit={this.onSumbit}
                />
              </form>
            </div>
            <div>
              {user.activitis
                ? user.activitis.map((todo, index) => (
                    <div key={index} className='text-left created-at'>
                      <i className='fas fa-check-square'></i>{' '}
                      <span style={{ fontWeight: 'bolder' }}>{todo.txt}</span>{' '}
                      last added at{' '}
                      <span>{new Date(todo.at).toDateString()}</span>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userFullName) => dispatch(updateUser(userFullName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
