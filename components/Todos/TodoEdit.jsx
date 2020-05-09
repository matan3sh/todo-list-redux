import todoService from '../../services/todoService.js';

const { connect } = ReactRedux;

import { updateTodo } from '../../actions/TodoActions.js';

class TodoForm extends React.Component {
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
    this.props.updateTodo(this.state);
    todoService.save(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
