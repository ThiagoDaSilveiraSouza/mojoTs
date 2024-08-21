import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Alexandria", sans-serif;
    --primary-color: #B2CD01;
    --secondary-color: #333333;
    scroll-behavior: smooth;
  }
  body{
    margin: 0;
  }
  .centralizer{
    width: 95vw;
    max-width: 1140px;
    margin: 0 auto;
    overflow-y: auto;
    scrollbar-width: none;
    max-height: 100%;
  }
  .page-main{
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 100vh;
  }
  .page-section{
    display: flex;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none;
    scroll-snap-align: start;
    padding-top: 150px;
    box-sizing: border-box;
  }
`;
