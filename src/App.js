import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './Components/homepage'
import LandingPage from './Components/coming_soon'
import './App.css';

function App() {
  return (
    <div className="App">
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
