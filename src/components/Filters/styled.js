import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 6px;
  }
`;

const Button = styled.button`
  border: 1px solid transparent;
  transition: 0.1s linear;
  padding: 6px;
  font-size: 14px;
  font-weight: 200;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ff8888;
  }
`;

export { Wrapper, Button };
