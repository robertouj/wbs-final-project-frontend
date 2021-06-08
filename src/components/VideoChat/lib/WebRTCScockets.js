/****************************************************************************
 * Initial setup
 ****************************************************************************/

const SERVER = "http://localhost:5000";
// // const SERVER = "https://wbs-fp-videochat-test.herokuapp.com/";
const io = require("socket.io-client");
const Peer = require("simple-peer");
const socket = io(SERVER);

/****************************************************************************
 * Signaling server
 ****************************************************************************/

function startSocket(roomId, setInitCall, setUserToCall, setChat, name) {
  socket.emit("create or join", roomId, name);
  socket.on("room created", () => {});

  socket.on("ready", (usersInRoom) => {
    setInitCall(true);
    setUserToCall(usersInRoom[0]);
  });

  /********************** chat **********************/
  socket.on("chat message", (msg) => {
    setChat(msg);
  });
}

/********************** chat **********************/
function sendMessageChat(msg) {
  socket.emit("chat message", msg);
}

/****************************************************************************
 * User media (webcam)
 ****************************************************************************/

function createMedia(video, setStream) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
      setStream(currentStream);
      video.current.srcObject = currentStream;
    });
}

/****************************************************************************
 * WebRTC peer connection and data channel
 ****************************************************************************/

function callUser(
  userToCall,
  me,
  name,
  stream,
  userVideo,
  connectionRef,
  call,
  setRemoteName
) {
  const peer = new Peer({ initiator: true, trickle: false, stream });

  peer.on("signal", (data) => {
    socket.emit("callUser", {
      userToCall: userToCall,
      signalData: data,
      from: me,
      name,
    });
  });

  peer.on("stream", (currentStream) => {
    userVideo.current.srcObject = currentStream;
  });

  socket.on("callAccepted", (signal, to, name) => {
    setRemoteName(name);
    peer.signal(signal);
  });

  connectionRef.current = peer;
}

function answerCall(
  stream,
  call,
  userVideo,
  connectionRef,
  setRemoteName,
  name
) {
  const peer = new Peer({ initiator: false, trickle: false, stream });

  peer.on("signal", (data) => {
    socket.emit("answerCall", { signal: data, to: call.from, name });
  });

  peer.on("stream", (currentStream) => {
    userVideo.current.srcObject = currentStream;
  });

  peer.signal(call.signal);
  connectionRef.current = peer;
}

function getMe(setMe, setCall, setRemoteName) {
  socket.on("me", (id) => setMe(id));

  socket.on("callUser", ({ from, name: callerName, signal }) => {
    setCall({ isReceivingCall: true, from, name: callerName, signal });
    if (callerName) setRemoteName(callerName);
  });
}

/*********************************************************************************
 * Functions
 *********************************************************************************/

//TODO: here can be placed the fucntion to generate the uuid
// Create a random roomId if not already present in the URL.
// function randomToken() {
//   return Math.floor((1 + Math.random()) * 1e16)
//     .toString(16)
//     .substring(1);
// }

module.exports = {
  createMedia,
  callUser,
  startSocket,
  getMe,
  answerCall,
  sendMessageChat,
};
