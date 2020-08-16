import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [info, setInfo] = useState({
    name: "",
    room: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            name="name"
            placeholder="Name"
            className="joinInput"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <input
            name="room"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={handleChange}
            type="text"
          />
        </div>

        <Link
          onClick={(e) =>
            !info.name || !info.room ? e.preventDefault() : null
          }
          to={`/chat?name=${info.name}&room=${info.room}`}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
