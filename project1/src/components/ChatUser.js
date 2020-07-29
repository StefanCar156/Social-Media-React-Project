import React from "react";

function ChatUser(props) {
  const styleActive = {
    backgroundColor: "rgb(22, 245, 14)",
  };

  return (
    <div className="chat-user-profile">
      <span
        className="active-circle"
        style={props.object.active % 2 == 1 ? styleActive : null}
      ></span>
      <p className="chat-username">{props.object.name}</p>
    </div>
  );
}

export default ChatUser;
