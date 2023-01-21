import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import "../CSS/Post.css";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";

const Post = ({ postData, inActive }) => {
  const d = new Date(postData.createdAt);
  return (
    <div
      className="postParent"
      style={{ backgroundImage: `url(${postData.postImage})` }}
    >
      <div className="creator">
        <p className="creatr">
          <AccountCircleIcon />
          {postData.username ?? "gaurav"}
        </p>
        {inActive !== "1" ? (
          <Link className="link" to={`/post/${postData.postID}/${inActive}`}>
            <OpenInFullRoundedIcon />
            <p className="smallDes">Expand</p>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="content">
        <div className="left">
          <p className="contentText">{postData.postTitle}</p>
          <p className="contentText">Created on: {postData.createdAt ?? "23-01-2023"}</p>
        </div>
        <div className="right">
          <div className="likes">
            <div>
              <FavoriteIcon sx={{ color: "red" }} />
              <p className="count">{postData.postLikes ?? "0"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
