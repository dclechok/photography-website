import React from "react";
import "./App.css";
import Nav from "./Nav";
import Intro from "./Intro";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <h1>DC Lechok</h1>
      <h2>Photographer</h2>
      <Router>
        <Nav />
        <main>
          <Intro />
          <About />
          <Gallery />
          <Contact />
          {/* The following is for a web design that utilizes multiple pages and links for navigation.  We're adopting a single page theme. */}
          {/* <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch> */}
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
