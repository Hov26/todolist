import {
  addTaskAC,
  updateValueAC,
  removeTaskAC,
  taskDoneAC
} from "./toDoReducer";
import ToDo from "./ToDo";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    tasksData: state.tasksData
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addTask: text => {
      dispatch(addTaskAC(text));
    },
    updateValue: text => {
      dispatch(updateValueAC(text));
    },
    removeTask: idx => {
      dispatch(removeTaskAC(idx));
    },
    updateTaskState: idx => {
      dispatch(taskDoneAC(idx));
    }
  };
};

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ToDoContainer;
