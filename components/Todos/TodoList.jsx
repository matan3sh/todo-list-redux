import TodoPreview from './TodoPreview.jsx';

const TodoList = ({ todos, onDelete, onSetDone, onSetCurrent }) => {
  return (
    <React.Fragment>
      {todos.map((todo) => (
        <TodoPreview
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onSetDone={onSetDone}
          onSetCurrent={onSetCurrent}
        />
      ))}
    </React.Fragment>
  );
};

export default TodoList;
