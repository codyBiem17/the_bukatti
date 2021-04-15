import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HomePage, LandingPage} from './Components'
import './App.css';

function App() {
  return (
    <div className="App overlay">
      {/* <LandingPage /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} /> 
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
