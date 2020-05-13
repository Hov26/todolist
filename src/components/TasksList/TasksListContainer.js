import { connect } from "react-redux";
import { removeTaskAC, taskDoneAC } from "../../ToDo/actions";
import { getTasksList } from "../../ToDo/selector";
import TasksList from "./TasksList";

let mapStateToProps = state => {
  return {
    tasksData: state.todoState,
    list: getTasksList(state)
  };
};

let mapDispatchToProps = dispatch => {
  return {
    removeTask: idx => {
      dispatch(removeTaskAC(idx));
    },
    updateTaskState: idx => {
      dispatch(taskDoneAC(idx));
    }
  };
};

const TasksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);

export default TasksListContainer;
