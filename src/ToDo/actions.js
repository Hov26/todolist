export const addTaskAC = text => ({
  type: "ADD_TASK",
  newTask: text
});

export const updateValueAC = text => ({
  type: "UPDATE_INPUT_VALUE",
  newTaskMessage: text
});

export const removeTaskAC = idx => ({
  type: "REMOVE_TASK",
  idx
});

export const taskDoneAC = idx => ({
  type: "SWITCH_TASK_STATE",
  idx
});

export const showCompletedTasksAC = () => ({
  type: "SHOW_COMPLETED_TASKS"
});

export const showActiveTasksAC = () => ({
  type: "SHOW_ACTIVE_TASKS"
});

export const showAllTasksAC = () => ({
  type: "SHOW_ALL_TASKS"
});
