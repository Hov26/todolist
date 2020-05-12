import React from "react";
import * as S from "./styled";
import { connect } from "react-redux";
import { removeTaskAC, taskDoneAC } from "../../ToDo/actions";
import { getTasksList } from "../../ToDo/selector";

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
            <S.RemoveBtn onClick={() => onRemoveTask(idx)}>X</S.RemoveBtn>{" "}
          </S.ItemWrapper>
        );
      })}
    </S.TasksWrapper>
  );
};

let mapStateToProps = state => {
  return {
    tasksData: state.todoState,
    list: getTasksList(state)
  };
};

let mapDispatchToProps = dispatch => {
  return {
    removeTask: idx => {
      dispatch(removeTaskAC(idx));
    },
    updateTaskState: idx => {
      dispatch(taskDoneAC(idx));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
