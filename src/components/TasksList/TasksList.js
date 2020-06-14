import React, { useMemo } from "react";
import * as S from "./styled";

const TasksList = ({ list, filterOption, switchTaskState, removeTask }) => {
  const filteredList = useMemo(() => {
    if (filterOption === "completed") {
      return list.filter(task => task.isDone);
    }
    if (filterOption === "active") {
      return list.filter(task => !task.isDone);
    }
    return list;
  }, [list, filterOption]);

  return (
    <S.TasksWrapper className="TasksWrapper">
      {filteredList.map(({ task, isDone }, idx) => {
        return (
          <S.ItemWrapper className="ItemWrapper" key={idx}>
            <S.TaskItem
              isDone={isDone}
              className="TaskItem"
              onClick={() => switchTaskState(idx)}
            >
              <S.DoneBtn isDone={isDone} />
              {task}
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
