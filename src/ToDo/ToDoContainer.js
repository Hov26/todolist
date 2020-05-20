import { updateValue, addTask } from "./actions";
import { getTasksList } from "./selector";
import ToDo from "./ToDo";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    tasksData: state.todoState,
    list: getTasksList(state)
  };
};

const ToDoContainer = connect(mapStateToProps, {
  updateValue,
  addTask
})(ToDo);

export default ToDoContainer;
