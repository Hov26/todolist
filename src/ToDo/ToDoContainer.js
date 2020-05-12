import * as actions from "./actions";
import { getTasksList } from "./selector";
import ToDo from "./ToDo";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    tasksData: state.todoState,
    list: getTasksList(state)
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addTask: text => {
      dispatch(actions.addTaskAC(text));
    },
    updateValue: text => {
      dispatch(actions.updateValueAC(text));
    },
    removeTask: idx => {
      dispatch(actions.removeTaskAC(idx));
    },
    updateTaskState: idx => {
      dispatch(actions.taskDoneAC(idx));
    },
    showCompletedTasks: () => {
      dispatch(actions.showCompletedTasksAC());
    },
    showActiveTasks: () => {
      dispatch(actions.showActiveTasksAC());
    },
    showAllTasks: () => {
      dispatch(actions.showAllTasksAC());
    }
  };
};

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ToDoContainer;
