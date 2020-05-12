let initialState = {
  tasksData: [],
  currentValue: "",
  isCompletedClicked: false,
  isActiveClicked: false
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
    case "SHOW_COMPLETED_TASKS": {
      console.log("SHOW_COMPLETED_TASKS");
      const newState = { ...state };
      newState.isCompletedClicked = true;
      newState.isActiveClicked = false;
      return newState;
    }
    case "SHOW_ACTIVE_TASKS": {
      const newState = { ...state };
      newState.isActiveClicked = true;
      newState.isCompletedClicked = false;
      return newState;
    }
    case "SHOW_ALL_TASKS": {
      console.log("SHOW_ALL_TASKS");
      const newState = { ...state };
      newState.isActiveClicked = false;
      newState.isCompletedClicked = false;
      return newState;
    }
    default:
      return state;
  }
};

export default toDoReducer;
