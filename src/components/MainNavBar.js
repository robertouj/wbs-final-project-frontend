import React from 'react'
import { Navbar, Nav, } from "react-bootstrap";
import { Link, Route, Switch } from 'react-router-dom';
import Profile from './profile/Profile'
import Register from './Register'
import Login from './Login'

import About from './About'

export default function MainNavBar() {
    return (
        <div>
            <Navbar bg="light" expand="sm">
      <Navbar.Brand className="ms-5" href="/">Coink!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-4 justify-content-between">
          <Nav.Link><Link to="/" >Home</Link></Nav.Link>
          <Nav.Link><Link to="/About" >about</Link></Nav.Link>
          <Nav.Link><Link to="/profile" >profile</Link></Nav.Link>
          <Nav.Link><Link to="/login" >login</Link></Nav.Link>
          <Nav.Link><Link to="/register" >register</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
         
{/* About, Profile/Bio Profile/Personal Profile/Schedule Profile/Skills Profile/Wallet */}
         <Switch>
             <Route path='/About'>
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
    )
}
