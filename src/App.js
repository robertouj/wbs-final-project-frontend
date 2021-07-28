import "./App.css";
import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import SearchBar from "./components/SearchBar";
import CardList from "./components/Cards/CardList";
import MainNavBar from "./components/MainNavBar";
import ProtectedRoute from "./components/ProtectedRoute";

const APIURL = "https://wbs-final-json-api.herokuapp.com/";

function App() {
  return (
    <>
      <MainNavBar />
      <Switch>
        <Route path="/" exact>
          <SearchBar />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default App;
