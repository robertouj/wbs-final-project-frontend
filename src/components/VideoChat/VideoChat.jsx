import React, { useContext, useState } from "react";
import { SocketContext } from "./Context";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlidingPane from "react-sliding-pane";
import Chat from "./Chat";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./sliding-pane.css";

function VideoChat() {
  const { myVideo, userVideo, name, remoteName, stream, leaveCall, states } =
    useContext(SocketContext);
  const [micMuted, setMicMuted] = useState(true);
  const [videoMuted, setVideoMuted] = useState(false);
  const [paneOpen, setPaneOpen] = useState(false);

  const toggleMic = () => {
    setMicMuted(!micMuted);
    console.log(stream.getTracks());
    stream.getAudioTracks()[0].enabled = !stream.getAudioTracks()[0].enabled;
  };

  const toggleVideo = () => {
    setVideoMuted(!videoMuted);
    stream.getVideoTracks()[0].enabled = !stream.getVideoTracks()[0].enabled;
  };

  return (
    <>
      <Row>
        <Col>
          <div className="video-grid__local_video">
            <div>My name: {name || "NoName"}</div>
            {/* Video element where show the local stream from getUserMedia() */}
            <video
              playsInline
              ref={myVideo}
              autoPlay
              muted="muted"
              className="local_video"
            />
            <div className="local_video_icons">
              {!micMuted ? (
                <>
                  <i className="bi bi-mic-mute-fill" onClick={toggleMic}></i>
                </>
              ) : (
                <>
                  <i className="bi bi-mic-fill" onClick={toggleMic}></i>
                </>
              )}
              {videoMuted ? (
                <>
                  <i
                    className="bi bi-camera-video-off-fill"
                    onClick={toggleVideo}
                  ></i>
                </>
              ) : (
                <>
                  <i
                    className="bi bi-camera-video-fill"
                    onClick={toggleVideo}
                  ></i>
                </>
              )}
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
            </div>
          </div>
        </Col>
        <Col>
          <div className="video-grid__remote_video">
            <div>Remote name: {remoteName || "NoName"}</div>
            {/* Video element where show the remote stream from RTCPeerconnection */}
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="remote_video"
            />
          </div>
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
        </Col>
      </Row>
    </>
  );
}

export default VideoChat;
