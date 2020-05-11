import React from "react";
import * as S from "./Todo.styled.js";

const ToDo = props => {
  const inputRef = React.createRef();

  const onAddTask = e => {
    const value = inputRef.current.value;
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
    <S.Main className="Main">
      <S.Wrapper className="Wrapper">
        <S.Form className="Form">
          <S.Input
            type="text"
            ref={inputRef}
            onChange={e => onUpdateValue(e)}
            onKeyDown={e => onAddTask(e)}
            value={props.tasksData.currentValue}
          />
        </S.Form>
        <S.Filters>
          <button>all</button>
          <button>active</button>
          <button>completed</button>
        </S.Filters>
        <S.TasksWrapper className="TasksWrapper">
          {props.tasksData.tasksData.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <S.ItemWrapper className="ItemWrapper">
                  <S.TaskItem
                    onClick={e => onUpdateTaskState(idx)}
                    isDone={props.tasksData.tasksData[idx].isDone}
                    className="TaskItem"
                  >
                    <S.DoneBtn className="done-btn" />
                    {item.task}
                  </S.TaskItem>
                  <S.RemoveBtn onClick={() => onRemoveTask(idx)}>X</S.RemoveBtn>{" "}
                </S.ItemWrapper>
              </React.Fragment>
            );
          })}
        </S.TasksWrapper>
      </S.Wrapper>
    </S.Main>
  );
};

export default ToDo;
