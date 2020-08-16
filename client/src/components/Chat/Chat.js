import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [info, setInfo] = useState({
    name: "",
    room: "",
  });
  const ENDPOINT = "localhost:5000";

  socket = io(ENDPOINT);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setInfo({ ...info, name, room });

    socket.emit("join", { name, room }, () => {});

    // cleanup
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return <div>Chat</div>;
};

export default Chat;
