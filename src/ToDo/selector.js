const getState = state => {
  return state.todoState;
};

export const getTasksList = state => {
  const store = getState(state);
  if (store.isCompletedClicked) {
    return store.tasksData.filter(task => task.isDone);
  }
  if (store.isActiveClicked) {
    return store.tasksData.filter(task => task.isDone === false);
  }
  return store.tasksData;
};
