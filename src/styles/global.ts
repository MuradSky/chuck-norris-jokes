// global.ts

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after { 
    box-sizing: border-box;
  }

  body {
    padding: 50px 0;
    margin: 0;
    font-family: "Courier New", Courier, monospace;
    text-align: center;

    @media (max-width: 720px) {
      padding: 20px 0;
    }
  }
`;
