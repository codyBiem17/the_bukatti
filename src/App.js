import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {About, HomePage, Header, Footer} from './Components'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

function App() {
  return (
    <div className="App overlay">
      <Router>
        {/* <Route exact path="/" component={LandingPage} />    */}
        <Header />
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
