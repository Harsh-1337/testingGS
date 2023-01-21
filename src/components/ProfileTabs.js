import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import posts from "../Testing/posts";
import PostGrid from "./PostGrid";
import "react-tabs/style/react-tabs.css";
import { useUserContext } from "../context/user_context";
const moderatorTask =  require("../API/moderatorCheck.cron");


const ProfileTabs = ({ reviewPosts, moderatePosts }) => {
  const { moderation, setModeration, post, setPost, review, setReview } = useUserContext();

  useEffect(() => {
    const md = JSON.parse(localStorage.getItem('moderation'));
    if (md) {
      setModeration(md);
    }
    const pt = JSON.parse(localStorage.getItem('posts'));
    if (pt) {
      setPost(pt);
    }
    const rv = JSON.parse(localStorage.getItem('review'));
    if (rv) {
      setReview(rv);
    }
    try {
      moderatorTask();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(post);
  return (
    <Tabs>
      <TabList>
        <Tab>Posts</Tab>
        <Tab>In queue for moderation check</Tab>
        <Tab>Needs change</Tab>
      </TabList>

      <TabPanel>
        <PostGrid inActive="0" posts={post===null?[]: post} />
      </TabPanel>
      <TabPanel>
        <PostGrid inActive="1" posts={moderation===null?[]: moderation} />
      </TabPanel>
      <TabPanel>
        <PostGrid inActive="2" posts={review===null?[]: review} />
      </TabPanel>
    </Tabs>
  );
};

export default ProfileTabs;
