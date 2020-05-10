import db from './db.js';
import storageService from './storageService.js';

const KEY = 'user';

var gUser = null;
_createUser();

export default {
  query,
  update,
};

function _createUser() {
  const defaultUser = db.getDefaultUser();
  gUser = storageService.load(KEY, defaultUser);
  storageService.store(KEY, gUser);
}

function query() {
  return gUser;
}

function update(user) {
  gUser = user;
  storageService.store(KEY, gUser);
}
