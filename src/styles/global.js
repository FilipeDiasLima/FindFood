import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2E353F;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Philosopher', sans-serif;
    color: #DFDFE3;
  }

  button {
    cursor: pointer;
  }
`;
