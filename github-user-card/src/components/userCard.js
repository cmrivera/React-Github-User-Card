import React from "react";
import styled from "styled-components";

const Box = styled.div`
  max-width: 50%;
  height: auto;
  padding: 2%;
  background-image: linear-gradient(to right, lightgreen, blue);
  border-radius: 8px;
  box-sizing: border-box;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
  allign-items: center;
`;
const Img = styled.img`
  width: 10rem;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export default function Card(props) {
  return (
    <Box>
      <Img src={props.userImg} />
      <h1>{props.name}</h1>
      <h2>{props.username}</h2>
      <h3>{props.profile}</h3>
      <h4>{props.followers}</h4>
      <h4>{props.following}</h4>
      <p>{props.bio}</p>
    </Box>
  );
}
