import { updateValue, addTask } from "./actions";
import ToDo from "./ToDo";
import { connect } from "react-redux";

const ToDoContainer = connect(null, { updateValue, addTask })(ToDo);

export default ToDoContainer;
