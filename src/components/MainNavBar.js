import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Profile from "./profile/Profile";
import Register from "./Register";
import Login from "./Login";
import SearchBar from "./SearchBar";

import About from "./About";

export default function MainNavBar() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#ac66cc" }} expand="sm">
        <Navbar.Brand className="ms-5" href="/">
          Coink!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4 justify-content-between">
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/About">
                about
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/profile">
                profile
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/register">
                register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact>
          <SearchBar />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
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
        <Navbar.Brand className="ms-5" href="/">Coink!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4 justify-content-between" >
            <Nav.Link ><Link style={{ textDecoration: 'none' }} to="/" >Home</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/About" >about</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/profile" >profile</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/login" >login</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/register" >register</Link></Nav.Link>
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
