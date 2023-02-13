import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="header-bottomarea">
      <div className="container">
        <div className="header-bottominner">
          <div className="header-logo">
          <Link to="/">
            <img height="80" src="/testyora/images/logo/YaraLogo.png" alt="dialia logo" />
          </Link>
          </div>
          <nav className="tm-navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/faq">FAQ</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-mobilemenu clearfix">
          <div className="tm-mobilenav"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
