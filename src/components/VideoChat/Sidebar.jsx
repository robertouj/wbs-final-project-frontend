import React, { useContext, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Chat from "./Chat";
// import "react-sliding-pane/dist/react-sliding-pane.css";
import "./sliding-pane.css";

// Sliding Pane implemented https://www.npmjs.com/package/react-sliding-pane
// change css https://github.com/DimitryDushkin/sliding-pane

import { SocketContext } from "./Context";

function Sidebar({ children }) {
  const { states, leaveCall } = useContext(SocketContext);
  

  return (
    <>
        {children}
    </>
  );
}

export default Sidebar;
