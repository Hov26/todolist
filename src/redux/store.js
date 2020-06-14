import { createStore, combineReducers } from "redux";
import toDoReducer from "../ToDo/toDoReducer";

const __REDUX_DEVTOOLS_EXTENSION__ = window
  ? window.__REDUX_DEVTOOLS_EXTENSION__
  : null;

const reducers = combineReducers({
  todoState: toDoReducer
});

const store = createStore(reducers, {}, __REDUX_DEVTOOLS_EXTENSION__());

export default store;
