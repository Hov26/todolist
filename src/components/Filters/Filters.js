import React from "react";
import * as S from "./styled";

const Filters = ({ setFilterOption }) => {
  return (
    <S.Wrapper>
      <S.Button onClick={() => setFilterOption("all")}>all</S.Button>
      <S.Button onClick={() => setFilterOption("active")}>active</S.Button>
      <S.Button onClick={() => setFilterOption("completed")}>
        completed
      </S.Button>
    </S.Wrapper>
  );
};

export default Filters;
