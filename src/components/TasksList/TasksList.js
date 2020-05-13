import React from "react";
import * as S from "./styled";

const TasksList = props => {
  const onRemoveTask = idx => {
    props.removeTask(idx);
  };

  const onUpdateTaskState = idx => {
    props.updateTaskState(idx);
  };

  return (
    <S.TasksWrapper className="TasksWrapper">
      {props.list.map((item, idx) => {
        const isTaskDone = props.list[idx].isDone;
        return (
          <S.ItemWrapper className="ItemWrapper" key={idx}>
            <S.TaskItem
              isDone={isTaskDone}
              className="TaskItem"
              onClick={() => onUpdateTaskState(idx)}
            >
              <S.DoneBtn isDone={isTaskDone} />
              {item.task}
            </S.TaskItem>
            <S.RemoveBtn
              className="RemoveBtn"
              onClick={() => onRemoveTask(idx)}
            >
              &times;
            </S.RemoveBtn>{" "}
          </S.ItemWrapper>
        );
      })}
    </S.TasksWrapper>
  );
};

export default TasksList;
