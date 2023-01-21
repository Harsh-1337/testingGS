import React from "react";
import CreatePost from "../components/CreatePost";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import { useNavigate, Navigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    font-size: 1.5rem;
  }
  @media (max-width: 1045px) {
    flex-direction: column;
    .text {
      margin-top: 20vh;
    }
  }
  @media (max-width: 690px) {
    .text h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 590px) {
    .text h1 {
      font-size: 1.2rem;
    }
    .text h2 {
      font-size: 1.2rem;
    }
  }
`;

const Create = () => {
  const navigate = useNavigate();
  const { authenticated, user } = useUserContext();
  console.log(authenticated);
  if (authenticated === false) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return (
    <Wrapper>
      <div className="text">
        <h1>
          Have a <span id="red"> Story</span>, Memory or a{" "}
          <span id="red">Thought</span>?
        </h1>
        <h2>
          {" "}
          <span id="green"> Share </span>it with everyone.
        </h2>
      </div>
      <CreatePost user={user} />
    </Wrapper>
  );
};

export default Create;
