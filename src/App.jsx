import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
