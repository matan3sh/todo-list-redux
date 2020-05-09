const defaultTodos = [
  {
    _id: 'jkp5y',
    title: 'Learn Redux',
    isDone: false,
  },
  {
    _id: '7ujrh',
    title: 'Workout at the gym',
    isDone: true,
  },
  {
    _id: 'nmkr9',
    title: 'Watch Last Dance in Netflix',
    isDone: false,
  },
];

const defaultUser = {
  fullName: 'Puki Ben David',
  activitis: [
    { txt: 'Added a Todo', at: 1589034451432 },
    { txt: 'Added a Todo', at: 1589034451435 },
    { txt: 'Added a Todo', at: 1523873242735 },
  ],
  prefs: { color: 'black', bgColor: 'white' },
};

function getDefaultData() {
  return defaultTodos;
}

function getDefaultUser() {
  return defaultUser;
}

export default {
  getDefaultData,
  getDefaultUser,
};
