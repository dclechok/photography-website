import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <React.Fragment>
        <nav><Link to="/about">about</Link> | <Link to="/gallery">gallery</Link> | <Link to="/contact">contact</Link></nav>
        <hr />
    </React.Fragment>
  );
}

export default Nav;

