import React, { useState } from "react";
import "./Nav.css";

function Nav() {

  const [selection, setSelection] = useState('about');

  return (
    <React.Fragment>
        <nav>about | gallery | contact</nav>
        <hr />
    </React.Fragment>
  );
}

export default Nav;

