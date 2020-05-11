import { addTaskAC, updateTaskAC, removeTaskAC } from "./toDoReducer";
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
    updateTask: text => {
      dispatch(updateTaskAC(text));
    },
    removeTask: idx => {
      dispatch(removeTaskAC(idx));
    }
  };
};

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ToDoContainer;
