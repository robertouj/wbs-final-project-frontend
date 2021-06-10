import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import './Chat.css'

import React, { useContext, useState } from "react";
import { SocketContext } from "./Context";

function Chat() {
  const { sendMessage, chat } = useContext(SocketContext);
  const [chatText, setChatText] = useState("");

  return (
    <>
      <ul className="chat-messages">
        {!chat ? "Start chatting..." : chat.map((msg) => <li>{msg}</li>)}
      </ul>

      <InputGroup className="mb-3">
        <FormControl
          className=" text-test"
          as="textarea"
          placeholder="Enter your text..."
          onChange={(e) => setChatText(e.target.value)}
          aria-label="Text to send"
          aria-describedby="basic-addon2"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              sendMessage(chatText);
              e.target.value = "";
            }
          }}
        />
        {/* <Button
          variant="primary"
          id="button-addon2"
          onClick={() => {
            sendMessage(chatText);
          }}
        >
          Send
        </Button> */}
      </InputGroup>
    </>
  );
}

export default Chat;
