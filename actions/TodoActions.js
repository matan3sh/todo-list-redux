export function setTodos(todos) {
  return { type: 'SET_TODOS', payload: todos };
}

export function setTodo(todo) {
  return { type: 'SET_TODO', payload: todo };
}

export function saveTodo(todo) {
  return { type: 'ADD_TODO', payload: todo };
}

export function updateTodo(todo) {
  return { type: 'UPDATE_TODO', payload: todo };
}

export function removeTodo(todoId) {
  return { type: 'REMOVE_TODO', payload: todoId };
}

export function showDone() {
  return { type: 'SHOW_DONE' };
}

export function showActive() {
  return { type: 'SHOW_ACTIVE' };
}

export function showAll() {
  return { type: 'SHOW_ALL' };
}

export function searchTodo(txt) {
  return { type: 'SEARCH_TODO', payload: txt };
}

export function setUser(user) {
  return { type: 'SET_USER', payload: user };
}

export function updateUser(user) {
  return { type: 'UPDATE_USER', payload: user };
}
