import todoService from '../../services/todoService.js';
import userService from '../../services/userService.js';

export function loadTodos() {
  return (dispatch) => {
    todoService
      .query()
      .then((todos) => dispatch({ type: 'SET_TODOS', payload: todos }));
  };
}

export function loadUser() {
  return (dispatch) => {
    userService
      .query()
      .then((user) => dispatch({ type: 'SET_USER', payload: user }));
  };
}

export function removeTodo(todoId) {
  return (dispatch) => {
    todoService
      .remove(todoId)
      .then(() => dispatch({ type: 'REMOVE_TODO', payload: todoId }));
  };
}

export function updateUser(user) {
  return (dispatch) => {
    userService
      .update(user)
      .then((user) => dispatch({ type: 'UPDATE_USER', payload: user }));
  };
}

export function setTodo(todo) {
  return (dispatch) => {
    dispatch({ type: 'SET_TODO', payload: todo });
  };
}

export function saveTodo(todo) {
  return (dispatch) => {
    const type = todo._id ? 'UPDATE_TODO' : 'ADD_TODO';
    dispatch({ type, payload: todo });
    todoService.save(todo).then((savedTodo) => console.log(savedTodo));
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
