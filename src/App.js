import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <h1>DC Lechok</h1>
      <h2>Photographer</h2>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
