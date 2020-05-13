import React from "react";
import * as S from "./Todo.styled.js";
import FiltersContainer from "./../components/Filters/FiltersContainer";
import TasksListContainer from "./../components/TasksList/TasksListContainer";

const ToDo = props => {
  const onAddTask = e => {
    const value = e.target.value;
    if (e.keyCode === 13) {
      props.addTask(value);
    }
  };

  const onUpdateValue = e => {
    const value = e.target.value;
    props.updateValue(value);
  };

  return (
    <S.Wrapper className="Wrapper">
      <S.Form className="Form">
        <S.Input
          type="text"
          onChange={e => onUpdateValue(e)}
          onKeyDown={e => onAddTask(e)}
          value={props.tasksData.currentValue}
        />
      </S.Form>
      <FiltersContainer />
      <TasksListContainer />
    </S.Wrapper>
  );
};

export default ToDo;
