import styled from "styled-components";

type InputProps = {
  $size?: 1 | 2;
};

export const Input = styled.input<InputProps>`
  flex: ${({ $size = 1 }) => {
    if ($size === 1) {
      return "1 1 calc(50% - 20px)";
    } else if ($size === 2) {
      return "1 1 100%";
    }
  }};
  background: #ffffff;
  border: none;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
`;
