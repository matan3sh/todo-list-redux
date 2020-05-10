import {
  loadTodos,
  removeTodo,
  updateTodo,
  setTodo,
  showDone,
  showAll,
  showActive,
  loadUser,
  updateUser,
} from '../store/actions/TodoActions.js';
import TodoList from '../components/Todos/TodoList.jsx';
import TodoAdd from '../components/Todos/TodoAdd.jsx';
import TodoEdit from '../components/Todos/TodoEdit.jsx';
import TodoFilter from '../components/Todos/TodoFilter.jsx';
import TodoSearch from '../components/Todos/TodoSearch.jsx';

const { connect } = ReactRedux;

class TodoApp extends React.Component {
  state = { setCurr: false };

  componentDidMount() {
    this.props.loadTodos();
    this.props.loadUser();
  }

  onDelete = (todoId) => {
    let newActivity = { txt: 'Removed a Todo', at: Date.now() };
    const user = {
      fullName: this.props.user.fullName,
      activitis: [newActivity, ...this.props.user.activitis],
      prefs: this.props.user.prefs,
    };
    this.props.removeTodo(todoId);
    this.props.updateUser(user);
  };

  onSetDone = (todo) => {
    todo.isDone = !todo.isDone;
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

const mapDispatchToProps = {
  loadTodos,
  loadUser,
  removeTodo,
  updateUser,
  setTodo,
  updateTodo,
  showDone,
  showAll,
  showActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
