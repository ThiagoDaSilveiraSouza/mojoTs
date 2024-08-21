import styled, { CSSProperties } from "styled-components";

type TitleProps = {
  $textaling?: CSSProperties["textAlign"];
  $color?: 1 | 2 | CSSProperties["color"];
};

export const Title = styled.h2<TitleProps>`
  letter-spacing: 0;
  font-size: 40px;
  text-align: ${({ $textaling = "center" }) => $textaling};
  color: ${({ $color = 1 }) => {
    if ($color === 1) {
      return "var(--primary-color)";
    } else if ($color === 2) {
      return "var(--secondary-color)";
    } else {
      return $color;
    }
  }};
  margin: 0;
`;
