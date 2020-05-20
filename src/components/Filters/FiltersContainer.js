import Filters from "./Filters";
import { connect } from "react-redux";
import {
  showAllTasks,
  showActiveTasks,
  showCompletedTasks
} from "../../ToDo/actions";

const FiltersContainer = connect(null, {
  showCompletedTasks,
  showActiveTasks,
  showAllTasks
})(Filters);

export default FiltersContainer;
