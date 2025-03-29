import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import TechStack from './components/TechStack'
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <TechStack/>
      <ProjectSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
