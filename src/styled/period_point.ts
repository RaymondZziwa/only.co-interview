import styled from "styled-components";

export const Point = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;