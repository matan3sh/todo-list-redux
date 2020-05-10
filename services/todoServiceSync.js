import db from './db.js';
import storageService from './storageService.js';

const KEY = 'todos';
var gTodos = null;
_createTodos();

export default {
  query,
  remove,
  save,
};

function _createTodos() {
  const defaultData = db.getDefaultData();
  gTodos = storageService.load(KEY, defaultData);
  storageService.store(KEY, gTodos);
}

function query() {
  return gTodos;
}

function remove(id) {
  const idx = gTodos.findIndex((todo) => todo._id === id);
  gTodos.splice(idx, 1);
  storageService.store(KEY, gTodos);
}

function save(todo) {
  if (todo._id) {
    const idx = gTodos.findIndex((_todo) => _todo._id === todo._id);
    gTodos.splice(idx, 1, todo);
  } else {
    todo._id = _makeId();
    todo.isDone = false;
    gTodos.unshift(todo);
  }
  storageService.store(KEY, gTodos);
}

function _makeId(length = 6) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
