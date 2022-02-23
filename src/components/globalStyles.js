import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 16px;
  min-height: 100%;
  overflow-wrap: break-word;
  //background-color: #e7e7e7;
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
