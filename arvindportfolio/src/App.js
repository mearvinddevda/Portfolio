import React from 'react';
import './App.css';
import Skill from './Components/skills-icon.jsx';
import HeroSec from './Components/navbar';
import Hero from './Components/hero.js';
import Exp from './Components/experience.jsx';
import Contact from './Components/contant.jsx';
import Footer from './Components/footer.jsx';

function App() {
  return (
    <div className="App">
      <HeroSec/>
      <Hero/>
      <Skill/>
      <Exp/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
