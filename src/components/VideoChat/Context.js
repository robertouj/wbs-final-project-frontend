import React, { createContext, useState, useRef, useEffect } from "react";
import {
  callUser,
  createMedia,
  startSocket,
  getMe,
  sendMessageChat,
  answerCall,
} from "./lib/WebRTCScockets";

const SocketContext = createContext();

function ContextProvider({ children }) {
  const [isSessionAvailable, setIsSessionAvailable] = useState(false);
  const [room, setRoom] = useState("");
  const [stream, setStream] = useState();
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [initCall, setInitCall] = useState(false);
  const [userToCall, setUserToCall] = useState(false);
  const [name, setName] = useState("Anonymous");
  const [remoteName, setRemoteName] = useState();
  /********************** chat **********************/
  const [chat, setChat] = useState([]);

  //TODO: Here the object to control the visibility or enable/disable buttons
  // // Set up initial action button
  const [states, setStates] = useState({
    callButtonEnabled: true,
    hangupButtonEnabled: false,
    answerButtonEnabled: false,
  });

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    checkSessionAvailability();
    getMe(setMe, setCall, setRemoteName);
    setTimeout(async () => {
      await startSession();
    }, 1500);
    
  }, []);

  useEffect(() => {
    if (call.signal) answerCall(stream, call, userVideo, connectionRef, name);
  }, [call]);

  useEffect(() => {
    if (initCall && stream) {
      if (userToCall)
        callUser(
          userToCall,
          me,
          name,
          stream,
          userVideo,
          connectionRef,
          call,
          setRemoteName
        );
    }
  }, [stream, initCall]);

  const initRoom = () => {
    // href.substring(this.href.lastIndexOf('/') + 1)
    const roomId = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    console.log(roomId);
    setRoom(roomId);
  };

  /**
   * Actions when the Start button is pressed
   */
  const startSession = () => {
    //TODO: Control the states
    // setStates({
    //   ...states,
    //   callButtonEnabled: false,
    //   hangupButtonEnabled: true,
    // });

    initRoom(isSessionAvailable);
    startSocket(room, setInitCall, setUserToCall, setChat, name);
    createMedia(myVideo, setStream);
  };

  const checkSessionAvailability = () => {
    //TODO: implement the uuid hash
    // Now the has is faked
    // Need Check with the database. If there isn't session, the process stop.
    setIsSessionAvailable("#c9f2a12622782");
  };

  //TODO: end the connection when click in the button, like in the example
  const leaveCall = () => {
    //TODO: Control the states
    // setStates({
    //   ...states,
    //   hangupButtonEnabled: false,
    //   callButtonEnabled: true,
    // });
  };

  /********************** chat **********************/
  const sendMessage = (chatText) => {
    sendMessageChat([...chat, `${name}: ${chatText}`]);
    setChat([...chat, `${name}: ${chatText}`]);
  };

  return (
    <SocketContext.Provider
      value={{
        //TODO: Control the states
        states,
        stream,
        myVideo,
        userVideo,
        name,
        isSessionAvailable,
        chat,
        remoteName,
        startSession,
        leaveCall,
        sendMessage,
        setName,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export { ContextProvider, SocketContext };
