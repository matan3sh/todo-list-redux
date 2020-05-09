import {
  setTodos,
  removeTodo,
  updateTodo,
  setTodo,
  showDone,
  showAll,
  showActive,
  setUser,
  updateUser,
} from '../actions/TodoActions.js';
import todoService from '../services/todoService.js';
import userService from '../services/userService.js';
import TodoList from '../components/Todos/TodoList.jsx';
import TodoAdd from '../components/Todos/TodoAdd.jsx';
import TodoEdit from '../components/Todos/TodoEdit.jsx';
import TodoFilter from '../components/Todos/TodoFilter.jsx';
import TodoSearch from '../components/Todos/TodoSearch.jsx';

const { connect } = ReactRedux;

class TodoApp extends React.Component {
  state = { setCurr: false };

  componentDidMount() {
    this.loadUser();
    this.loadTodos();
  }

  loadTodos = () => {
    const todos = todoService.query();
    this.props.setTodos(todos);
  };

  loadUser = () => {
    const user = userService.query();
    this.props.setUser(user);
  };

  onDelete = (todoId) => {
    let newActivity = { txt: 'Removed a Todo', at: Date.now() };
    const user = {
      fullName: this.props.user.fullName,
      activitis: [newActivity, ...this.props.user.activitis],
      prefs: this.props.user.prefs,
    };
    todoService.remove(todoId);
    userService.update(user);
    this.props.removeTodo(todoId);
    this.props.updateUser(user);
  };

  onSetDone = (todo) => {
    todo.isDone = !todo.isDone;
    todoService.save(todo);
    this.props.updateTodo(todo);
  };

  onSetCurrent = (todo) => {
    this.setState(({ setCurr }) => ({ setCurr: !setCurr }));
    this.props.setTodo(todo);
  };

  render() {
    const { todos, filtered, showDone, showActive, showAll } = this.props;
    return (
      <div>
        <div className='card-form'>
          {this.state.setCurr ? (
            <TodoEdit onSetCurrent={this.onSetCurrent} />
          ) : (
            <TodoAdd />
          )}
        </div>
        <div className='grid-2 card'>
          <div>
            <TodoFilter
              showAll={showAll}
              showActive={showActive}
              showDone={showDone}
            />
          </div>
          <div>
            <TodoSearch />
          </div>
        </div>
        {filtered !== null ? (
          <TodoList
            todos={filtered}
            onDelete={this.onDelete}
            onSetDone={this.onSetDone}
            onSetCurrent={this.onSetCurrent}
          />
        ) : (
          <TodoList
            todos={todos}
            onDelete={this.onDelete}
            onSetDone={this.onSetDone}
            onSetCurrent={this.onSetCurrent}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todo: state.currTodo,
    filtered: state.filtered,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodos: (todos) => dispatch(setTodos(todos)),
    removeTodo: (todoId) => dispatch(removeTodo(todoId)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    setTodo: (todo) => dispatch(setTodo(todo)),
    showDone: () => dispatch(showDone()),
    showAll: () => dispatch(showAll()),
    showActive: () => dispatch(showActive()),
    setUser: (user) => dispatch(setUser(user)),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
