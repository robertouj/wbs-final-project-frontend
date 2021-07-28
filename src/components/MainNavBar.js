import React, { useContext } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo1.png";
import "./MainNavBar.css";
import { AuthContext } from "../AuthContext";

export default function MainNavBar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#ac66cc" }} expand="sm">
        <Navbar.Brand className="ms-5" href="/" style={{ color: "#ffd8cc" }}>
          <Image src={logo} width="200rem" rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4 justify-content-between navbar--links">
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "#ffd8cc" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#ffd8cc" }}
                to="/About"
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              {isLoggedIn() && (
                <Link
                  style={{ textDecoration: "none", color: "#ffd8cc" }}
                  to="/profile/about-me"
                >
                  Profile
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#ffd8cc" }}
                to="/login"
              >
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#ffd8cc" }}
                to="/register"
              >
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

/**
 * OLD VERSION
 */
/*
import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route, Switch } from 'react-router-dom';
import Profile from './profile/Profile'
import Register from './Register'
import Login from './Login'
import SearchBar from './SearchBar'

import About from './About'


export default function MainNavBar()
{

  return (
    <div >
      <Navbar style={{ backgroundColor: "#ac66cc" }} expand="sm" >
        <Navbar.Brand className="ms-5" href="/" style={{ color: "#ffd8cc", fontSize: '30px' }}>Coink!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4 justify-content-between" style={{ color: '#867ae9' }}>
            <Nav.Link ><Link style={{ textDecoration: 'none', color: '#ffd8cc', fontSize: '20px' }} to="/" >Home</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none', color: '#ffd8cc', fontSize: '20px' }} to="/About" >About</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none', color: '#ffd8cc', fontSize: '20px' }} to="/profile" >Profile</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none', color: '#ffd8cc', fontSize: '20px' }} to="/login" >Login</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none', color: '#ffd8cc', fontSize: '20px' }} to="/register" >Register</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <Switch>
        <Route path='/' exact  >
          <SearchBar />
        </Route>
        <Route path='/About'>
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
      </Switch>

    </div >
  )
}
*/
