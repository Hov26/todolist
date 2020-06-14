import Filters from "./Filters";
import { connect } from "react-redux";
import { setFilterOption } from "../../ToDo/actions";

const FiltersContainer = connect(null, { setFilterOption })(Filters);

export default FiltersContainer;
