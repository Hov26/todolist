import React from "react";
import * as S from "./styled";
import { connect } from "react-redux";
import {
  showAllTasksAC,
  showActiveTasksAC,
  showCompletedTasksAC
} from "../../ToDo/actions";

const Filters = props => {
  return (
    <S.FilterComp>
      <button onClick={props.showAllTasks}>all</button>
      <button onClick={props.showActiveTasks}>active</button>
      <button onClick={props.showCompletedTasks}>completed</button>
    </S.FilterComp>
  );
};

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

export default connect(null, mapDispatchToProps)(Filters);
