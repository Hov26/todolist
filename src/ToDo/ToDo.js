import React from "react";
import * as S from "./Todo.styled.js";
import FiltersContainer from "./../components/Filters/FiltersContainer";
import TasksListContainer from "./../components/TasksList/TasksListContainer";

class ToDo extends React.Component {
  state = {
    isOpen: false,
    currentValue: ""
  };

  onAddTask = e => {
    if (e.keyCode === 13) {
      this.props.addTask(e.target.value);
      this.setState({
        currentValue: ""
      });
    }
  };

  onUpdateValue = e => {
    this.setState({
      currentValue: e.target.value
    });
  };

  render() {
    return (
      <S.Wrapper className="Wrapper">
        <h1>Todos</h1>
        <S.Form className="Form">
          <S.Input
            type="text"
            onChange={e => this.onUpdateValue(e)}
            onKeyDown={e => this.onAddTask(e)}
            value={this.state.currentValue}
          />
        </S.Form>
        <FiltersContainer />
        <TasksListContainer />
      </S.Wrapper>
    );
  }
}

export default ToDo;
