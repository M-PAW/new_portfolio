import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import './main-styles/common-styles.css';
import Navigation from './main-components/Navigation';
import Home from './main-components/Home';
import Education from './main-components/Education';
import Skills from './main-components/Skills';
import Projects from './main-components/Projects';
// import Social from './main-components/Social';

function App() {
  return (
    <div className="main-container flex-container" data-test="component-app">
      <div className="nav-container">
        <Navigation />
      </div>
      <div className="router-container">
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/education' component={Education} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
          {/* <Social /> */}
    </div>
  );
}

export default App;
