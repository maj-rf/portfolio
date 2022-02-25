import { createGlobalStyle, keyframes } from 'styled-components';

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
  button: '#582FBB',
  ddtext: '#fff',
  ddbg: '#121212',
};

export const darkTheme = {
  text: '#fff',
  body: '#121212',
  button: '#FABE58',
  ddtext: '#121212',
  ddbg: '#fff',
};

export const waveAnimation = keyframes`
0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }`;
