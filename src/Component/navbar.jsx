import React from "react";
import logo from "../Assets/Image/MagesLogo.png";
import "../App.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <NavLink exact to="/">
        <img src={logo} width="300px" alt="" />
      </NavLink>
      <div className="buttons">
        <NavLink exact to="/login">
          <button className="btn-1">Login</button>
        </NavLink>
        <NavLink exact to="/signup">
          <button className="btn-2">Sign up</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
