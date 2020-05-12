import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  showAllTasksAC,
  showActiveTasksAC,
  showCompletedTasksAC
} from "../../ToDo/actions";

const FilterComp = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 6px;
  }
`;

const Filters = props => {
  return (
    <FilterComp>
      <button onClick={props.showAllTasksAC}>all</button>
      <button onClick={props.showActiveTasksAC}>active</button>
      <button onClick={props.showCompletedTasksAC}>completed</button>
    </FilterComp>
  );
};

const mapDispatchToProps = () => {
  return {
    showAllTasksAC,
    showActiveTasksAC,
    showCompletedTasksAC
  };
};

export default connect(null, mapDispatchToProps)(Filters);
