let initialState = {
  tasksData: [],
  currentValue: "",
  isCompletedClicked: false,
  isActiveClicked: false,
  filter: {
    showActive: "1",
    showCompleted: "2",
    showAll: "3"
  }
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT_VALUE": {
      // const newState = { ...state };
      // newState.currentValue = action.newTaskMessage;
      // return newState;
      return {
        ...state,
        currentValue: action.newTaskMessage
      };
    }
    case "ADD_TASK": {
      const newValue = { task: action.newTask, isDone: false };
      // return {
      //   ...state,
      //   currentValue: "",
      //   tasksData: [...state.tasksData, newValue]
      // };
      const newState = { ...state };
      newState.tasksData = [...state.tasksData];
      newState.tasksData.push(newValue);
      newState.currentValue = "";
      return newState;
    }

    case "REMOVE_TASK": {
      // const newState = { ...state };
      // newState.tasksData.splice(action.idx, 1);
      // return newState;

      const newState = { ...state };
      newState.tasksData = [...state.tasksData];
      newState.tasksData.splice(action.idx, 1);
      return newState;

      // const { tasksData } = state;
      // const { idx } = action;
      // return {
      //   ...state,
      //   tasksData: [
      //     ...tasksData.slice(0, idx),
      //     ...tasksData.slice(idx + 1, tasksData.length)
      //   ]
      // };
    }
    case "SWITCH_TASK_STATE": {
      // const newState = { ...state };
      const { tasksData } = state;
      const { idx } = action;
      // newState.tasksData[idx].isDone = !newState.tasksData[idx].isDone;
      // return newState;
      return {
        ...state,
        tasksData: [
          ...state.tasksData.slice(0, idx),
          { ...state.tasksData[idx], isDone: !tasksData[idx].isDone },
          ...state.tasksData.slice(idx + 1, tasksData.length)
        ]
      };
    }
    case "SHOW_COMPLETED_TASKS": {
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
