import './App.css';
import { useState } from "react"; 
import { CV } from "./CV/CV";
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import More from './components/More';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


const { hero, education, experience, languages, habilities, volunteer } = CV;


function App() {
  return (
    <>
      <div className="App">
        <Hero hero={hero}></Hero>
        <About about={hero.aboutMe}></About>
        <Experience experience={experience}></Experience>
        <Portfolio></Portfolio>
        <Education education={education}></Education>
        <More
          languages={languages}
	        habilities={habilities}
	        volunteer={volunteer}>
        </More>
        <Footer></Footer>
      </div>
    </>  
  );
}

export default App;
