import React from 'react';
import './App.css';
import Navigation from './main-components/Navigation';
import Home from './main-components/Home';
import Education from './main-components/Education';

function App() {
  return (
    <div className="App" data-test="component-app">
      <Navigation />
      <Home />
      <Education />
    </div>
  );
}

export default App;
