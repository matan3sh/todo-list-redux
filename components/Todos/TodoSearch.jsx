import { searchTodo } from '../../store/actions/TodoActions.js';

const { connect } = ReactRedux;

class TodoSearch extends React.Component {
  state = { txt: '' };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () =>
      this.props.searchTodo(this.state.txt)
    );
  };

  onSumbit = (e) => {
    e.preventDefault();
    this.props.searchTodo(this.state.txt);
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.onSumbit}
          className='flex-center'
          style={{ width: '100%' }}
        >
          <input
            type='text'
            name='txt'
            placeholder='Search Todo...'
            value={this.state.txt}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-primary mx-1'
            onClick={this.onSumbit}
          />
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  searchTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);
