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
        draft.isCompletedClicked = true;
        draft.isActiveClicked = false;
        return;
      }
      case "SHOW_ACTIVE_TASKS": {
        draft.isActiveClicked = true;
        draft.isCompletedClicked = false;
        return;
      }
      case "SHOW_ALL_TASKS": {
        draft.isActiveClicked = false;
        draft.isCompletedClicked = false;
        return;
      }
      default:
        return state;
    }
  });
};

export default toDoReducer;
