import React, { Component } from "react";

class AddNewPost extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="new-post-container">
        <h4 className="new-post-title">Add New Post</h4>
        <div className="post-form">
          <label for="description">
            Description:
            <input
              type="text"
              placeholder="Type something..."
              id="description"
            />
          </label>
          <label for="new-photo">
            Photo:{" "}
            <input type="text" placeholder="Photo URL..." id="new-photo" />
          </label>
        </div>
        <button
          className="post-btn"
          onClick={() => {
            alert(
              "Sorry, your actions have been restricted due to violation of Terms of Service. You will be able to post again for 30 days"
            );
          }}
        >
          Post
        </button>
      </div>
    );
  }
}

export default AddNewPost;
