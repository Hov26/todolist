import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 50px auto 0 auto;
`;

const Form = styled.div`
  display: flex;
`;

const Input = styled.input`
  padding: 18px;
  font-size: 22px;
  font-weight: 100;
  width: 100%;
  border: 2px solid #d8d8d8;
  transition: all 0.2s linear;
  &:focus {
    outline: none !important;
    border-color: #9a9a9a;
  }
`;

export { Wrapper, Input, Form };
