let initialState = {
  tasksData: [],
  currentValue: ""
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newState = { ...state };
      const newValue = { task: action.newTask };
      newState.tasksData.push(newValue);
      newState.currentValue = "";
      return newState;
    }
    case "REMOVE_TASK": {
      const newState = { ...state };
      newState.tasksData.splice(action.idx, 1);
      return newState;
    }
    case "UPDATE_TASK_MESSAGE": {
      const newState = { ...state };
      newState.currentValue = action.newTaskMessage;
      return newState;
    }
    default:
      return state;
  }
};

export const addTaskAC = text => ({
  type: "ADD_TASK",
  newTask: text
});

export const updateTaskAC = text => ({
  type: "UPDATE_TASK_MESSAGE",
  newTaskMessage: text
});

export const removeTaskAC = idx => ({
  type: "REMOVE_TASK",
  idx
});

export default toDoReducer;
