import React from 'react';
import './App.css';
import './main-styles/common-styles.css';
import Navigation from './main-components/Navigation';
// import Home from './main-components/Home';
// import Education from './main-components/Education';
// import Skills from './main-components/Skills';
// import Projects from './main-components/Projects';
// import Social from './main-components/Social';

function App() {
  return (
    <div className="main-container" data-test="component-app">
      <Navigation />
      {/* <Home /> */}
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Social /> */}
    </div>
  );
}

export default App;
