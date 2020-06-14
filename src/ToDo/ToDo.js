import React, { useState } from "react";
import * as S from "./Todo.styled.js";
import FiltersContainer from "./../components/Filters/FiltersContainer";
import TasksListContainer from "./../components/TasksList/TasksListContainer";

const ToDo = ({ addTask }) => {
  const [currentValue, setCurrentValue] = useState("");

  const onAddTask = e => {
    if (e.keyCode === 13) {
      addTask(e.target.value);
      setCurrentValue("");
    }
  };

  const onUpdateValue = e => setCurrentValue(e.target.value);

  return (
    <S.Wrapper className="Wrapper">
      <h1>Todos</h1>
      <S.Form className="Form">
        <S.Input
          type="text"
          value={currentValue}
          onKeyDown={onAddTask}
          onChange={onUpdateValue}
        />
      </S.Form>
      <FiltersContainer />
      <TasksListContainer />
    </S.Wrapper>
  );
};

export default ToDo;
