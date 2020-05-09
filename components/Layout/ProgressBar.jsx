const { connect } = ReactRedux;

class ProgressBar extends React.Component {
  state = { style: null };

  render() {
    const { todos } = this.props;
    const doneTodos = todos.filter((todo) => todo.isDone);
    setTimeout(() => {
      const style = {
        opacity: 1,
        width: `${(doneTodos.length / todos.length) * 100}%`,
      };
      this.setState({ style });
    }, 250);
    return (
      <div className='flex-center'>
        <div className='progress'>
          <div className='progress-done' style={this.state.style}>
            {((doneTodos.length / todos.length) * 100).toFixed(1)}%
          </div>
          <span className='text-center'>
            {doneTodos.length} of {todos.length} Tasks Completed
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(ProgressBar);
