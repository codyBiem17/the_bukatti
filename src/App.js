import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  About, ArrowUp, Authentication, HomePage, Header, Faq, Footer, Guides, Order, Reservation
} from './Components'
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
          <Route path="/about" component={About} />
          <Route path="/auth" component={Authentication} />
          <Route path="/how_it_works" component={Guides} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/" component={HomePage} />
          <Route path="/order" component={Order} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
        <ArrowUp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
