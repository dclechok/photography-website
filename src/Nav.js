import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {

  return (
    <React.Fragment>
        <nav><Link className="linkDec" to="aboutID">about</Link> | <Link className="linkDec" to="galleryID">gallery</Link> | <Link className="linkDec" to="contactID">contact</Link></nav>
        <hr />
    </React.Fragment>
  );
}

export default Nav;

