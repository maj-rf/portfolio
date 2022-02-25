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
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
  scroll-behavior: smooth;
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

/* @media only screen and (min-width: 760px) {
  .App{
    display: flex;
    flex-direction: column;
  }
} */
`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  nav: '#efeff4',
  button: '#582FBB',
};

export const darkTheme = {
  text: '#fff',
  body: '#121212',
  button: '#FABE58',
};
