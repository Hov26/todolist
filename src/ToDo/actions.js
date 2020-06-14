export const addTask = text => ({
  type: "ADD_TASK",
  newTask: text
});

export const updateValue = text => ({
  type: "UPDATE_INPUT_VALUE",
  newTaskMessage: text
});

export const removeTask = idx => ({
  type: "REMOVE_TASK",
  idx
});

export const switchTaskState = idx => ({
  type: "SWITCH_TASK_STATE",
  idx
});

export const setFilterOption = filterType => ({
  type: "SET_FILTER_OPTION",
  value: filterType
});
