const TodoFilter = ({ showAll, showActive, showDone }) => {
  return (
    <div className='form-group text-center'>
      <div className='filter btn-light'>
        All Tasks{' '}
        <input
          className='pointer'
          type='radio'
          name='filterBy'
          onChange={() => showAll()}
        />
      </div>
      <div className='filter btn-light'>
        Active{' '}
        <input
          className='pointer'
          type='radio'
          name='filterBy'
          onChange={() => showActive()}
        />
      </div>
      <div className='filter btn-light'>
        Done{' '}
        <input
          className='pointer'
          type='radio'
          name='filterBy'
          onChange={() => showDone()}
        />
      </div>
    </div>
  );
};

export default TodoFilter;
