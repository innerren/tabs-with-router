import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="App-header">
    <Link className="HeadButton" to="/">
      "Home"
    </Link>
    <Link className="HeadButton" to={`/Tabs`}>
      "Tabs"
    </Link>
  </header>
);

export default Header;
