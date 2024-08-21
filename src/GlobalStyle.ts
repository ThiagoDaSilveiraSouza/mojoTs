import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Alexandria", sans-serif;
    --primary-color: #B2CD01;
    --secondary-color: #333333;
  }
  body{
    margin: 0;
  }
  .centralizer{
    width: 95vw;
    max-width: 1140px;
    margin: 0 auto;
  }
`;
