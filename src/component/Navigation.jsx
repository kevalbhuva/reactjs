import React from "react";
import "../Navigation.css";
import { Link } from "react-router-dom";
import logo from "../images/shop.png";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Service">Service</Link>
        </li>
        <li>
          <Link to="/Test">Test</Link>
        </li>
        <li>
          <Link to="/Signup">
            <button>SignUp</button>
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
