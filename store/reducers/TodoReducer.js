const initialState = {
  todos: [],
  currTodo: null,
  filtered: null,
  user: null,
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'SET_TODO':
      return {
        ...state,
        currTodo: action.payload,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case 'SHOW_DONE':
      return {
        ...state,
        filtered: state.todos.filter((todo) => todo.isDone),
      };
    case 'SHOW_ACTIVE':
      return {
        ...state,
        filtered: state.todos.filter((todo) => !todo.isDone),
      };
    case 'SHOW_ALL':
      return {
        ...state,
        filtered: null,
      };
    case 'SEARCH_TODO':
      return {
        ...state,
        filtered: state.todos.filter((todo) =>
          todo.title.toUpperCase().includes(action.payload.toUpperCase())
        ),
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
