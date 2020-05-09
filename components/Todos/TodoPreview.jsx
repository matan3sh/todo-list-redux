const TodoPreview = ({ todo, onDelete, onSetDone, onSetCurrent }) => {
  return (
    <div className='todo-card grid-2'>
      <div>
        <h3 className='text-left'>
          <span
            style={{
              textDecoration: `${todo.isDone ? 'line-through' : 'none'}`,
            }}
            onClick={() => onSetDone(todo)}
            className='pointer'
          >
            {todo.title}
          </span>
          <span className={`badge badge-${todo.isDone ? 'dark' : 'primary'}`}>
            {todo.isDone ? 'Complete' : 'Incomplete'}
          </span>
        </h3>
      </div>
      <div className='text-right'>
        <span className='pointer mx-1' onClick={() => onSetCurrent(todo)}>
          <i className='fas fa-edit'></i>
        </span>
        <span className='pointer' onClick={() => onDelete(todo._id)}>
          <i className='fas fa-trash'></i>
        </span>
      </div>
    </div>
  );
};

export default TodoPreview;
