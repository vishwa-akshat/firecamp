import React, { useState } from "react";

import User from "./User";

import "./App.css";

function App() {
  const [bg, setBg] = useState("");
  const userList = [
    "USER-1",
    "USER-2",
    "USER-3",
    "USER-4",
    "USER-5",
    "USER-6",
    "USER-7",
    "USER-8",
    "USER-9",
  ];
  const bgColor = [
    "#f9ed69",
    "#f08a5d",
    "#b83b5e",
    "#6a2c70",
    "#08d9d6",
    "#eaeaea",
    "#3f72af",
    "#112d4e",
    "#522546",
  ];

  const handleBgColor = (e) => {
    setBg(e.target.id);
  };
  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <h1>User Background</h1>
      {userList.map((user, i) => (
        <User
          key={i}
          user={user}
          color={bgColor[i]}
          handleBgColor={handleBgColor}
        />
      ))}
    </div>
  );
}

export default App;
