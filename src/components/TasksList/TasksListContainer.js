import { connect } from "react-redux";
import { removeTask, switchTaskState } from "../../ToDo/actions";
import { getTasksList } from "../../ToDo/selector";
import TasksList from "./TasksList";

let mapStateToProps = state => {
  return {
    tasksData: state.todoState,
    list: getTasksList(state)
  };
};

const TasksListContainer = connect(mapStateToProps, {
  removeTask,
  switchTaskState
})(TasksList);

export default TasksListContainer;
