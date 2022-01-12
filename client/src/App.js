import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div id="app">
        <Header>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </Header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;