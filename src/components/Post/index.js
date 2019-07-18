import React from "react";
import { Avatar } from "antd";
import "./index.css";

function Post({ width, height }) {
  return (
    <div className="postContainer">
      <div className="profile">
        <Avatar src="https://picsum.photos/250/250" /> Alleo Indong
      </div>

      <img src={`https://picsum.photos/${width}/${height}`} alt="post" />
    </div>
  );
}

export default Post;
