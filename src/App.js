import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Achievements />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}

export default App;
