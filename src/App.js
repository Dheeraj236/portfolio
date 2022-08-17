import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Contact />

    </div>
  )
}

export default App