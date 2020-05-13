import React from "react";
import * as S from "./styled";

const Filters = props => {
  return (
    <S.Wrapper>
      <button onClick={props.showAllTasks}>all</button>
      <button onClick={props.showActiveTasks}>active</button>
      <button onClick={props.showCompletedTasks}>completed</button>
    </S.Wrapper>
  );
};

export default Filters;
