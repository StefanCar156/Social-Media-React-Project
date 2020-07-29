import React from "react";
import "./App.css";
import Post from "./components/Post";
import postData from "./postData";
import ChatList from "./components/ChatList";
import ShareContainer from "./components/ShareContainer";
import AddNewPost from "./components/AddNewPost";

function App() {
  const postComponents = postData.map((post) => {
    return <Post key={postData.id} object={post} />;
  });

  return (
    <div className="container">
      {/* <AddNewPost /> */}
      {postComponents}
      <ChatList />
      <ShareContainer />
    </div>
  );
}
export default App;
