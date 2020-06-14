import produce from "immer";

let initialState = {
  tasksData: [],
  filterOption: "all"
};

const toDoReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_TASK": {
        const newValue = { task: action.newTask, isDone: false };
        draft.tasksData.push(newValue);
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
      case "SET_FILTER_OPTION": {
        draft.filterOption = action.value;
        return;
      }
      default:
        return state;
    }
  });
};

export default toDoReducer;
