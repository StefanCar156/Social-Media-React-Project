import React from "react";

function ShareContainer() {
  return (
    <div className="share-container">
      <h1 className="share-title">Share This Post Via:</h1>
      <span
        className="close-share"
        onClick={() => {
          document
            .querySelector(".share-container")
            .classList.remove("show-container");
        }}
      >
        &#10006;
      </span>

      <ul className="share-list">
        <li className="share-item">
          <img
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            alt="facebook"
            onClick={() => {
              alert("You've successfully shared this post via Facebook!");
              document
                .querySelector(".share-container")
                .classList.remove("show-container");
            }}
          />
        </li>
        <li className="share-item">
          <img
            src="https://www.pngkey.com/png/full/283-2831746_insta-icon-instagram.png"
            alt="instagram"
            onClick={() => {
              alert("You've successfully shared this post via Instagram!");
              document
                .querySelector(".share-container")
                .classList.remove("show-container");
            }}
          />
        </li>
        <li className="share-item">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            alt="twitter"
            onClick={() => {
              alert("You've successfully shared this post via Twitter!");
              document
                .querySelector(".share-container")
                .classList.remove("show-container");
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default ShareContainer;
