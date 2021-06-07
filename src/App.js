import React from "react";
import "./App.css";
import Nav from "./Nav";
import Intro from "./Intro";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}> {/*home*/}
          <h1 >DC Lechok</h1>
          <h2>Photographer</h2>
        </Link>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Intro} />
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
