import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100$;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: green;
  margin: 10px;
`;

const Title = styled.h4`
  font-size: 30px;
  display: flex;
  justify-content: center;
`;
const Avatar = styled.div``;
const Details = styled.div`
  font-size: 16px;'
  display:flex;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Friend = props => {
  return (
    <Card>
      <Title> {props.friend.name}</Title>
      <Details>
        <Avatar>
          <img src={props.friend.avatar} alt="" />
        </Avatar>
        <TextBox>
          {props.friend.age}
          {props.friend.email}
        </TextBox>
      </Details>
    </Card>
  );
};

export default Friend;
