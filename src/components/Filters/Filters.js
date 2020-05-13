import React from "react";
import * as S from "./styled";

const Filters = props => {
  return (
    <S.Wrapper>
      <S.Button onClick={props.showAllTasks}>all</S.Button>
      <S.Button onClick={props.showActiveTasks}>active</S.Button>
      <S.Button onClick={props.showCompletedTasks}>completed</S.Button>
    </S.Wrapper>
  );
};

export default Filters;
