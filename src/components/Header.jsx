import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import logo from "../images/I-PetsLogo.png";

import Cookies from "js-cookie";

import "./Header.css";

const Header = (props) => {
  let adminVisibility = "invisible";
  let welcomeBlurb = "";
  let signUpVisibility = "visible";
  let loginDisplay = "d-lg-none";
  let logoutDisplay = "";
  let myPetsVisibility = "";
  let myProfileVisibility = "";

  if (props.isAdmin) {
    adminVisibility = "visible";
  }
  if (props.isLoggedIn) {
    welcomeBlurb = `Hi ${props.firstName} - Welcome back to I-Pets!`;
    signUpVisibility = "invisible";
    loginDisplay = "d-lg-none";
    logoutDisplay = "";
  } else {
    welcomeBlurb = `Welcome to I-Pets!`;
    signUpVisibility = "visible";
    loginDisplay = "";
    logoutDisplay = "d-lg-none";
    myPetsVisibility = "invisible";
    myProfileVisibility = "invisible";
  }

  function handleLogOut(event) {
    event.preventDefault();
    Cookies.remove("I-Pets");
    alert("Successful logged out!");
    window.location.assign("/");
  }

  return (
    <Navbar className="background-color justify-content-around d-flex pl-2 pr-5">
      <Nav>
        <Link to="/" href="#home">
          <Image className="logo column" src={logo} />
        </Link>
      </Nav>
      <div
        className="mr-5 ml-5 welcome-blurb font-italic"
        style={{ color: "#85e0ff", fontSize: "1.1rem" }}
      >
        {welcomeBlurb}
      </div>
      <Nav className="mr-auto">
        <Link
          className={`m-2 ${myPetsVisibility}`}
          to="/pets"
          href="#pets"
          style={{ color: "white" }}
        >
          <strong>My Pets</strong>
        </Link>
        <Link
          className={`m-2 ${myProfileVisibility}`}
          to="/profile"
          href="#profile"
          style={{ color: "white" }}
        >
          <strong>My Profile</strong>
        </Link>
        <Link
          className={`m-2 ${adminVisibility}`}
          to="/admin"
          href="#admin"
          style={{ color: "white" }}
        >
          <strong>Admin</strong>
        </Link>
      </Nav>
      <div className="ml-5 d-flex row small">
        <Nav>
          <Link to="/search" href="#search">
            <button
              id="search-button"
              type="button"
              className="font-weight-bold text-white border-0 bg-transparent m-1 btn-sm d-flex align-items-center"
            >
              <FontAwesomeIcon
                icon={["fas", "search"]}
                size="2x"
                style={{ color: "white" }}
              />
            </button>
          </Link>
        </Nav>
        <button
          id="login-button"
          type="button"
          className={`loginLogoutStaticWidth font-weight-bold text-white border-0 bg-transparent m-1 btn-sm d-flex align-items-center ${loginDisplay}`}
          onClick={(event) => props.onLogIn(event)}
        >
          <div className="mr-2">Login</div>
        </button>
        <button
          id="logout-button"
          type="button"
          className={`loginLogoutStaticWidth font-weight-bold text-white border-0 bg-transparent m-1 btn-sm d-flex align-items-center ${logoutDisplay}`}
          onClick={(event) => handleLogOut(event)}
        >
          <div className="mr-2">Logout</div>
        </button>
        <button
          id="sign-up-button"
          type="button"
          className={`font-weight-bold strong text-white border-0 bg-transparent m-1 btn-sm d-flex align-items-center ${signUpVisibility}`}
          onClick={(event) => props.onSignUp(event)}
        >
          <div className="mr-2">Sign up</div>
        </button>
      </div>
    </Navbar>
  );
};

export default Header;
