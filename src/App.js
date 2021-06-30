import React from "react";
import "./App.css";
import Nav from "./Nav";
import Intro from "./Intro";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <React.Fragment>
      <h1>DC Lechok</h1>
      <h2>Photographer</h2>
        <Nav />
        <main>
          <Intro />
          <About />
          <Gallery />
          <Contact />
        </main>
    </React.Fragment>
  );
}

export default App;
