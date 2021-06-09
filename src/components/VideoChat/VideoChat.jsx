import React, { useContext, useState } from "react";
import { SocketContext } from "./Context";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function VideoChat() {
  const { myVideo, userVideo, name, remoteName, stream } =
    useContext(SocketContext);
  const [micMuted, setMicMuted] = useState(true);
  const [videoMuted, setVideoMuted] = useState(false);

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
        </Col>
      </Row>
    </>
  );
}

export default VideoChat;
