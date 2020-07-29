import React from "react";
import chatNames from "./chatNames";
import ChatUser from "./ChatUser";

function ChatList() {
  const chatComponents = chatNames.map((name) => {
    return <ChatUser key={chatNames.id} object={name} />;
  });

  return (
    <div className="chat-container">
      <h1 className="chat-title">Chat</h1>
      {chatComponents}
      <input
        type="text"
        placeholder="Search..."
        className="chat-search"
        onChange={() => {
          const searchInput = document.querySelector(".chat-search");
          const inputValue = searchInput.value;
          document.querySelectorAll(".chat-username").forEach((name) => {
            console.log(name.textContent);
            if (
              name.textContent.toLowerCase().includes(inputValue) ||
              name.textContent.toUpperCase().includes(inputValue)
            ) {
              name.parentElement.style.display = "flex";
            } else {
              name.parentElement.style.display = "none";
            }
          });
        }}
      />
    </div>
  );
}

export default ChatList;
