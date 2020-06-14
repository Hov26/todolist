import { connect } from "react-redux";
import { removeTask, switchTaskState } from "../../ToDo/actions";
import TasksList from "./TasksList";

let mapStateToProps = state => ({
  list: state.todoState.tasksData,
  filterOption: state.todoState.filterOption
});

const TasksListContainer = connect(mapStateToProps, {
  removeTask,
  switchTaskState
})(TasksList);

export default TasksListContainer;
