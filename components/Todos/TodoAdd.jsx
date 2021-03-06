const { connect } = ReactRedux;

import { saveTodo, updateUser } from '../../store/actions/TodoActions.js';

class TodoAdd extends React.Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSumbit = (e) => {
    e.preventDefault();
    let newActivity = { txt: 'Added a Todo', at: Date.now() };
    const user = {
      fullName: this.props.user.fullName,
      activitis: [newActivity, ...this.props.user.activitis],
      prefs: this.props.user.prefs,
    };
    this.props.saveTodo(this.state);
    this.props.updateUser(user);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className='text-center flex-center'>
        <form onSubmit={this.onSumbit}>
          <input
            type='text'
            name='title'
            placeholder='Add New Todo'
            value={this.state.title}
            onChange={this.onChange}
          />
        </form>
        <input
          type='submit'
          value='Submit'
          className='btn btn-dark mx-1'
          onClick={this.onSumbit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  saveTodo,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);
