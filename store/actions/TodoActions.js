import todoService from '../../services/todoService.js';
import userService from '../../services/userService.js';

export function loadTodos() {
  return (dispatch) => {
    const todos = todoService.query();
    dispatch({ type: 'SET_TODOS', payload: todos });
  };
}

export function loadUser() {
  return (dispatch) => {
    const user = userService.query();
    dispatch({ type: 'SET_USER', payload: user });
  };
}

export function removeTodo(todoId) {
  return (dispatch) => {
    todoService.remove(todoId);
    dispatch({ type: 'REMOVE_TODO', payload: todoId });
  };
}

export function updateUser(user) {
  return (dispatch) => {
    userService.update(user);
    dispatch({ type: 'UPDATE_USER', payload: user });
  };
}

export function setTodo(todo) {
  return (dispatch) => {
    dispatch({ type: 'SET_TODO', payload: todo });
  };
}

export function updateTodo(todo) {
  return (dispatch) => {
    todoService.save(todo);
    dispatch({ type: 'UPDATE_TODO', payload: todo });
  };
}

export function saveTodo(todo) {
  return (dispatch) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
    todoService.save(todo);
  };
}

export function showDone() {
  return (dispatch) => {
    dispatch({ type: 'SHOW_DONE' });
  };
}

export function showActive() {
  return (dispatch) => {
    dispatch({ type: 'SHOW_ACTIVE' });
  };
}

export function showAll() {
  return (dispatch) => {
    dispatch({ type: 'SHOW_ALL' });
  };
}

export function searchTodo(txt) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_TODO', payload: txt });
  };
}
