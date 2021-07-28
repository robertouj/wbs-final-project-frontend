import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ContextProvider } from "./components/VideoChat/Context";
import VideoChat from "./components/VideoChat/VideoChat";
import Sidebar from "./components/VideoChat/Sidebar";
import Notifications from "./components/VideoChat/Notifications";
import AuthContextProvider from "./AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HashRouter>
        <Switch>
          <Route path="/sessions/:room_id">
            <ContextProvider>
              <Container fluid>
                <VideoChat />

                <Sidebar>
                  <Notifications />
                </Sidebar>
              </Container>
            </ContextProvider>
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
