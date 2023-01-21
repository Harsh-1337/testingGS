import React, { useContext, useEffect, useState } from "react";
import GetCurrentUser from "../API/GetCurrentUser";
import profile from "../Testing/profile";
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState(profile);
  const [moderation, setModeration] = useState([]);
  const [post, setPost] = useState([]);
  const [review, setReview] = useState([]);
  const [userInput, setUserInput] = useState([]);

  // const [user, setUser] = useState({
  //   userID: "",
  //   username: "",
  //   emailID: "",
  //   phoneNo: ""

  // });
  // useEffect(() => {
  //   let Current_User = GetCurrentUser();
  //   if (Current_User !== "") {
  //     setUser(Current_User);
  //   }
  // }, [authenticated]);
  return (
    <UserContext.Provider
      value={{ user, authenticated, setAuthenticated, setUser, 
        moderation, setModeration, post, setPost, review, setReview, 
        userInput, setUserInput }}
    >
      {children};
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
