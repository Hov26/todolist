import React from "react";
import * as S from "./styled";

const TasksList = ({ list, switchTaskState, removeTask }) => {
  return (
    <S.TasksWrapper className="TasksWrapper">
      {list.map((item, idx) => {
        const isTaskDone = list[idx].isDone;
        return (
          <S.ItemWrapper className="ItemWrapper" key={idx}>
            <S.TaskItem
              isDone={isTaskDone}
              className="TaskItem"
              onClick={() => switchTaskState(idx)}
            >
              <S.DoneBtn isDone={isTaskDone} />
              {item.task}
            </S.TaskItem>
            <S.RemoveBtn className="RemoveBtn" onClick={() => removeTask(idx)}>
              &times;
            </S.RemoveBtn>{" "}
          </S.ItemWrapper>
        );
      })}
    </S.TasksWrapper>
  );
};

export default TasksList;
