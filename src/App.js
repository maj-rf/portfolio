import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
//import Contact from './components/Contact';
import { GlobalStyles, lightTheme, darkTheme } from './components/globalStyles';
import useDarkMode from './components/hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="App">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Intro />
          <About />
          <Projects />
          {/* <Contact /> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
