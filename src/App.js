import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Gallery from "./Gallery";

function App() {
  const [nav, setNav] = useState('');

  return (
    <React.Fragment>
      <h1>DC Lechok</h1>
      <h2>Photographer</h2>
      <Nav />
      <Gallery />
    </React.Fragment>
  );
}

export default App;
