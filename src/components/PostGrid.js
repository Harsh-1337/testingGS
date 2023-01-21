import React from "react";
import Post from "./Post";
import Postgrid from "../styled-components/Postgrid";
import "../CSS/postgrid.css";

const PostGrid = ({ posts, inActive }) => {
  return (
    <div className={inActive === "1" ? "inActive" : "gridParent"}>
      <div className="gridChild">
        {posts.length === 0 ?<></>:posts.map((post) => {
          return <Post key={post.postID} inActive={inActive} postData={post} />;
        })}
      </div>
    </div>
  );
};

export default PostGrid;
