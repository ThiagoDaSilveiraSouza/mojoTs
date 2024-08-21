import styled, { CSSProperties } from "styled-components";

type MainButton = {
  $backgroundcolor?: CSSProperties["backgroundColor"];
  $bordercolor?: CSSProperties["borderColor"];
  $fontcolor?: CSSProperties["color"];
};

export const MainButton = styled.button<MainButton>`
  top: 68px;
  left: 1302px;
  width: fit-content;
  padding: 0 18px;
  height: 30px;
  background: ${({ $backgroundcolor }) =>
    $backgroundcolor || "var(--primary-color)"};
  border-radius: 15px;
  opacity: 1;
  border: 1px solid transparent;
  border-color: ${({ $bordercolor }) => $bordercolor || "var(--primary-color)"};
  font-size: 15px;
  color: ${({ $fontcolor = "#0C3837" }) => $fontcolor};
  text-transform: uppercase;

  cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px 0 white;
  }
`;
