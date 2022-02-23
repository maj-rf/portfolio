import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  min-height: 100%;
  overflow-wrap: break-word;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.App {
  text-align: center;
}

/* @media only screen and (min-width: 760px) {
  .App{
    display: flex;
    flex-direction: column;
  }
} */
`;
