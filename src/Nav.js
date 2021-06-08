import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {

  return (
    <React.Fragment>
        <nav><Link to="aboutID">about</Link> | <Link to="galleryID">gallery</Link> | <Link to="contactID">contact</Link></nav>
        <hr />
    </React.Fragment>
  );
}

export default Nav;

