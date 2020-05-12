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
    updateValue: text => {
      dispatch(actions.updateValueAC(text));
    },
    addTask: text => {
      dispatch(actions.addTaskAC(text));
    }
  };
};

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ToDoContainer;
