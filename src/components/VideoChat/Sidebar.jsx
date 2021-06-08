import React, { useContext, useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Tabs from "react-bootstrap/Tabs";
import  Tab from "react-bootstrap/Tab";
import SlidingPane from "react-sliding-pane";

import Chat from "./Chat";
// import "react-sliding-pane/dist/react-sliding-pane.css";
import "./sliding-pane.css";

// Sliding Pane implemented https://www.npmjs.com/package/react-sliding-pane
// change css https://github.com/DimitryDushkin/sliding-pane

import { SocketContext } from "./Context";

function Sidebar({ children }) {
  const { states, leaveCall } =
    useContext(SocketContext);
  const [paneOpen, setPaneOpen] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__buttons">
          <Button
            disabled={!states.hangupButtonEnabled}
            variant="primary"
            onClick={leaveCall}
          >
              <i className="bi bi-door-closed-fill"></i> Close room
          </Button>         

          <Button onClick={() => setPaneOpen(true)}>
            <i className="bi bi-chat-left-text"></i> Chat Panel
          </Button>

          <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={paneOpen}
            // title="Hey, it is optional pane title.  I can be React component too."
            // subtitle="Optional subtitle."
            width="350px"
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              setPaneOpen(false);
            }}
          >
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="chat" title="Chat">
  <Chat />
  </Tab>
  <Tab eventKey="notes" title="Notes">
    
  </Tab>
  <Tab eventKey="fileshare" title="Fileshare" >
    
  </Tab>
</Tabs>
            
           
          </SlidingPane>
        </div>
        {children}
      </div>
    </>
  );
}

export default Sidebar;
