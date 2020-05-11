let initialState = {
  tasksData: [],
  currentValue: ""
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newState = { ...state };
      const newValue = { task: action.newTask, isDone: false };
      newState.tasksData.push(newValue);
      newState.currentValue = "";
      return newState;
    }
    case "REMOVE_TASK": {
      const newState = { ...state };
      newState.tasksData.splice(action.idx, 1);
      return newState;
    }
    case "SWITCH_TASK_STATE": {
      const newState = { ...state };
      const idx = action.idx;
      newState.tasksData[idx].isDone = !newState.tasksData[idx].isDone;
      return newState;
    }
    case "UPDATE_INPUT_VALUE": {
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

export default toDoReducer;
