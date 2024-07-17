"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --primary: #C5295D;
    --secondary: #6868D9;
    --gray-900: #313235;
    --gray-700: #60666C;
    --gray-500: #949A9C;
    --gray-300: #C9CECF;
    --gray-100: #F2F3F3;
  }

  body {
    margin: 0;
    padding: 0;
  }  
`

export default GlobalStyles;