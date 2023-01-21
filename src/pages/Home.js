import GreatShareService from "../API/api";
import React, { useState, useEffect } from "react";
import PostGrid from "../components/PostGrid";
import Posts from "../Testing/posts";
import { Link } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "../CSS/Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([...Posts]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   GreatShareService.getAllPostsFromPostInPostTable()
  //       .then((res)=>{
  //             setIsLoading(false);
  //             setPosts(res[1]);
  //       })
  //       .catch((error)=>{
  //         console.log(error);
  //       });
  //   console.log(posts);
  // },[]);

  return (
    <div className="homeParent" style={isLoading ? { height: "100vh" } : {}}>
      <div className="homeMain">
        <div className="exploreHeader">
          <h1>Explore</h1>
        </div>
        {isLoading === true ? (
          <div className="loader"></div>
        ) : (
          <PostGrid inActive="0" posts={posts} />
        )}
        {/* <div className="newPostSection">
          <div className="tempText">
            <h2>Start sharing your thoughts</h2>
          </div>
          <Link className="share" to="/create">
            Share A Post
            <PostAddIcon />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
