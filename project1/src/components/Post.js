import React, { Component } from "react";
import postData from "../postData";
import likeIconActive from "../like-icon-active.png";
import likeIconInactive from "../like-icon-inactive.png";
import commentIcon from "../comment-icon.png";
import shareIcon from "../share-icon.png";
import ChatUser from "./ChatUser";
import ChatList from "./ChatList";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShare = this.handleShare.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleChange() {
    this.setState((prevState) => {
      return {
        checked: !prevState.checked,
      };
    });
  }

  handleShare() {
    document.querySelector(".share-container").classList.add("show-container");
  }

  handleComment(e) {
    const currentSection = e.target.parentElement.parentElement.querySelector(
      ".comment-section"
    );
    currentSection.classList.toggle("comment-section-show");
  }

  render() {
    return (
      <div className="post">
        <div className="post-heading">
          <img
            className="profile-picture"
            src={this.props.object.profileAvatar}
            alt="jpg"
          />

          <h2 className="username">{this.props.object.userName}</h2>
          <h3 className="date-added">{this.props.object.datePosted}</h3>
        </div>
        <p className="post-description">{this.props.object.description}</p>
        <img src={this.props.object.img} alt="image" className="post-image" />
        <div className="impressions">
          <span className="likes">
            <button
              className="like-icon"
              checked={this.state.checked}
              onClick={this.handleChange}
            >
              <img
                src={this.state.checked ? likeIconActive : likeIconInactive}
                className="like-img"
              />
            </button>
            {this.state.checked
              ? this.props.object.likes + 1
              : this.props.object.likes}{" "}
            Likes
          </span>
          <span className="comment" onClick={this.handleComment}>
            <img className="comment-icon" src={commentIcon} /> Comments
          </span>
          <span className="share" onClick={this.handleShare}>
            <button className="share-icon">
              <img className="share-icon" src={shareIcon} />
            </button>
            Share
          </span>
        </div>
        <div className="comment-section">
          <ul className="comment-list">
            <li className="comments">
              <span className="comment-user">
                {this.props.object.comment.commentUser}
              </span>
              <span className="comment-text">
                {this.props.object.comment.commentText}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Post;
