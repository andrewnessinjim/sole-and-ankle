"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;

  }
  :root {
    --gray-700-hsl: 220deg 5% 40%;
    --white: hsl(0deg 0% 100%);
    --primary: hsl(340deg 65% 47%);
    --secondary: hsl(240deg 60% 63%);
    --gray-900: hsl(220deg 3% 20%);
    --gray-700: hsl(var(--gray-700-hsl));
    --gray-700-transparent: hsl(var(--gray-700-hsl) / 0.8);
    --gray-500: hsl(196deg 4% 60%);
    --gray-300: hsl(190deg 5% 80%);
    --gray-100: hsl(185deg 5% 95%);

    --weight-normal: 500;
    --weight-medium: 600;
    --weight-bold: 800;
  }

  html, body {
    height: 100%;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    display: block;
  }
`;

export default GlobalStyles;
