import React from "react";

export default function User(props) {
  return (
    <div className="user">
      <div
        className="user-block"
        style={{
          border: "1px solid #3666be",
          width: "30%",
          marginLeft: "35%",
          padding: "5vh 0",
          backgroundColor: props.color,
        }}
        tabIndex="0"
        onKeyPress={props.handleBgColor}
        id={props.color}
      >
        {props.user}
      </div>
    </div>
  );
}
