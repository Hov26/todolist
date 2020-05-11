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

  const onUpdateTask = e => {
    const value = e.target.value;
    props.updateTask(value);
  };

  const onRemoveTask = idx => {
    props.removeTask(idx);
  };

  const toggleState = e => {
    const classList = e.target.classList;
    if (classList.contains("done")) {
      classList.remove("done");
    } else {
      classList.add("done");
    }
  };

  return (
    <div>
      <S.Main>
        <S.Wrapper>
          <S.Form>
            <S.Input
              type="text"
              ref={inputRef}
              onChange={e => onUpdateTask(e)}
              onKeyDown={e => onAddTask(e)}
              value={props.tasksData.currentValue}
            />
          </S.Form>
          <S.TasksWrapper>
            {props.tasksData.tasksData.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <S.ItemWrapper>
                    <S.TaskItem onClick={e => toggleState(e)}>
                      <S.DoneBtn className="done-btn" />
                      {item.task}
                    </S.TaskItem>
                    <S.RemoveBtn onClick={() => onRemoveTask(idx)}>
                      X
                    </S.RemoveBtn>{" "}
                  </S.ItemWrapper>
                </React.Fragment>
              );
            })}
          </S.TasksWrapper>
        </S.Wrapper>
      </S.Main>
    </div>
  );
};

export default ToDo;
