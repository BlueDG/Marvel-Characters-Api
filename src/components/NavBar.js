import React from "react";
import logo from "../assets/images/logo.jpg";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top">
        <a
          href="/"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          <img src={logo} className="logo" alt="logo" />
        </a>
      </nav>
    </div>
  );
}
