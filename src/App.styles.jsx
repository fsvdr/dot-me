import { createGlobalStyle } from 'styled-components';

const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: '#dddddd',
};

const functionalColors = {
  text: colors.black,
  textSubtle: '#959595',
  background: '#dddddd',
};

const typography = {
  fontFamily: {
    display: 'Trenda',
    base: 'Trenda',
  },
  fontSize: {
    xs: '1.2rem',
    sm: '1.6rem',
    base: '2rem',
    md: '2.4rem',
    lg: '2.8rem',
    xl: '6rem',
    big: '14rem',
  },
  fontWeight: {
    regular: 400,
    semibold: 500,
    bold: 900,
  },
};

const breakpoints = {
  portraitTablet: '768px',
  mediumViewport: '1024px',
};

const depth = {
  siteNavLinks: 5,
  siteNav: 0,
};

export const theme = {
  color: { ...colors, ...functionalColors },
  ...typography,
  breakpoints,
  depth,
};

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  * { /* stylelint-disable-line */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /*
    1) Make list item markers appear inside content flow
    2) Reset list item marker type to modify them later
  */
  dl,
  ol,
  ul {
    list-style-position: inside; /* [1] */
    list-style-type: initial; /* [2] */
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img,
  embed,
  object,
  video {
    max-width: 100%;
  }

  html {
    box-sizing: border-box; /* [1] */
    width: 100%;
    height: auto;
    min-height: 100vh; /* [2] */
    overflow-x: hidden; /* [3] */
    font-family: sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
    text-size-adjust: 100%; /* [4] */
  }

  /* stylelint-disable selector-max-universal */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /*
    1) Occupy all available vertical space
    2) Fix viewport size bump on mobile safari
    3) Emphasize legibility over rendering speed and geometric precision
    4) Smooth the font on the level of the pixel
    5) Render text with grayscale antialiasing
  */
  body {
    width: 100%;
    min-height: 100vh; /* [1] */
    min-height: -webkit-fill-available; /* [2] */
    height: auto;
    font-family: ${theme.fontFamily.base};
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.regular};
    line-height: 1.6;
    color: ${theme.color.text};
    text-rendering: optimizeLegibility; /* [3] */
    -webkit-font-smoothing: antialiased; /* [4] */
    -moz-osx-font-smoothing: grayscale; /* [5] */
    font-smoothing: antialiased; /* stylelint-disable-line */
    background-color: ${theme.color.black};
  }

  [hidden] {
    display: none !important; /* stylelint-disable-line */
  }

  [disabled] {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  b {
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.white};
  }

  p {
    color: ${theme.color.textSubtle};
    max-width: 55ch;
    margin-block-end: 2.4rem;
  }
`;
