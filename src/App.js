import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { GlobalStyles } from './components/globalStyles';
function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
