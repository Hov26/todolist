import { createStore, combineReducers } from "redux";
import toDoReducer from "../ToDo/toDoReducer";

let reducers = combineReducers({
  tasksData: toDoReducer
});

let store = createStore(reducers);

export default store;
