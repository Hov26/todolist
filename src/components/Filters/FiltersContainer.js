import Filters from "./Filters";
import { connect } from "react-redux";
import {
  showAllTasksAC,
  showActiveTasksAC,
  showCompletedTasksAC
} from "../../ToDo/actions";

let mapDispatchToProps = dispatch => {
  return {
    showCompletedTasks: () => {
      dispatch(showCompletedTasksAC());
    },
    showActiveTasks: () => {
      dispatch(showActiveTasksAC());
    },
    showAllTasks: () => {
      dispatch(showAllTasksAC());
    }
  };
};

const FiltersContainer = connect(null, mapDispatchToProps)(Filters);

export default FiltersContainer;
