const { connect } = ReactRedux;

import { saveTodo } from '../../store/actions/TodoActions.js';

class TodoEdit extends React.Component {
  state = {
    title: this.props.todo.title,
    _id: this.props.todo._id,
    isDone: this.props.todo.isDone,
  };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSumbit = (e) => {
    e.preventDefault();
    this.props.saveTodo(this.state);
    this.props.onSetCurrent();
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className='text-center flex-center'>
        <form onSubmit={this.onSumbit}>
          <input
            type='text'
            name='title'
            placeholder='Add Todo'
            value={this.state.title}
            onChange={this.onChange}
          />
        </form>
        <input
          type='submit'
          value='Update'
          className='btn btn-dark mx-1'
          onClick={this.onSumbit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.currTodo,
  };
};

const mapDispatchToProps = {
  saveTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);
