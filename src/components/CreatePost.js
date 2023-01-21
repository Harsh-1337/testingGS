import React, { useState } from "react";
import CreateForm from "../styled-components/CreateForm";
import FileBase from "react-file-base64";
import GreatShareService from "../API/api";
import "../CSS/Create.css";
import { useUserContext } from "../context/user_context";
import { v4 as uuidv4 } from 'uuid';

const CreatePost = ({ user }) => {
  const { moderation, setModeration } = useUserContext();
  const [postData, setPostData] = useState({
    postTitle: "",
    postContent: "",
    postImage: "",
  });

  const HandleSubmit = (e) => {
    let id = uuidv4();
    e.preventDefault();
    // setModeration([...moderation, {
    //   postID: id,
    //   postTitle: postData.postTitle,
    //   postContent: postData.postContent,
    //   postImage: postData.postImage
    // }]);
    localStorage.setItem('moderation', JSON.stringify([{
      postID: id,
      postTitle: postData.postTitle,
      postContent: postData.postContent,
      postImage: postData.postImage
    }]));
    setPostData({
      postTitle: "",
      postContent: "",
      postImage: "",
    });
  };

  return (
    <CreateForm onSubmit={HandleSubmit}>
      <h3>Create a post</h3>
      <div className="inputBox">
        <input
          type="text"
          value={postData.postTitle}
          onChange={(e) => {
            setPostData({ ...postData, postTitle: e.target.value });
          }}
          name="title"
          id="title"
          required="required"
        />
        <span>Title for your post</span>
      </div>
      <div className="inputBox">
        <input
          type="text"
          value={postData.postContent}
          onChange={(e) => {
            setPostData({ ...postData, postContent: e.target.value });
          }}
          name="content"
          id="content"
          required="required"
        />
        <span>Write something about your post </span>
      </div>
      <div className="inputBox">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, postImage: base64 })
          }
        />
      </div>
      <input type="submit" value="Create" />
    </CreateForm>
  );
};

export default CreatePost;
