import React from "react";
import * as S from "./Todo.styled.js";
import Filters from "./../components/Filters/Filters";

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

  const onRemoveTask = idx => {
    props.removeTask(idx);
  };

  const onUpdateTaskState = idx => {
    props.updateTaskState(idx);
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
      {/* <Filters /> */}
      <S.Filters>
        <button onClick={props.showAllTasks}>all</button>
        <button onClick={props.showActiveTasks}>active</button>
        <button onClick={props.showCompletedTasks}>completed</button>
      </S.Filters>
      <S.TasksWrapper className="TasksWrapper">
        {props.list.map((item, idx) => {
          const isTaskDone = props.list[idx].isDone;
          return (
            <React.Fragment key={idx}>
              <S.ItemWrapper className="ItemWrapper">
                <S.TaskItem
                  isDone={isTaskDone}
                  className="TaskItem"
                  onClick={() => onUpdateTaskState(idx)}
                >
                  <S.DoneBtn isDone={isTaskDone} />
                  {item.task}
                </S.TaskItem>
                <S.RemoveBtn onClick={() => onRemoveTask(idx)}>X</S.RemoveBtn>{" "}
              </S.ItemWrapper>
            </React.Fragment>
          );
        })}
      </S.TasksWrapper>
    </S.Wrapper>
  );
};

export default ToDo;
