import React, { useContext } from "react";
import { SocketContext } from "./Context";

function Notifications() {
  const { notification, isSessionAvailable } = useContext(SocketContext);

  return (
    <>
      <div className="sidebar__notifications">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2>Notifications: {notification || "-"}</h2>
          <h3>{isSessionAvailable && ">> Mentoring available <<"}</h3>
        </div>
      </div>
    </>
  );
}

export default Notifications;
