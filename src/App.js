import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HomePage, LandingPage} from './Components'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

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
