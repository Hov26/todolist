import produce from "immer";

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
  return produce(state, draft => {
    switch (action.type) {
      case "UPDATE_INPUT_VALUE": {
        draft.currentValue = action.newTaskMessage;
        return;
      }
      case "ADD_TASK": {
        const newValue = { task: action.newTask, isDone: false };
        draft.tasksData.push(newValue);
        draft.currentValue = "";
        return;
      }

      case "REMOVE_TASK": {
        draft.tasksData.splice(action.idx, 1);
        return;
      }
      case "SWITCH_TASK_STATE": {
        const { idx } = action;
        draft.tasksData[idx].isDone = !draft.tasksData[idx].isDone;
        return;
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
  });
};

export default toDoReducer;
