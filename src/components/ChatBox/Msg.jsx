import React from "react";
import {
  MessageContainer,
  MessageContent,
  MessageWrapper,
  MessageOptions,
  MessageOptionsDropDown,
  AvatarUser,
} from "./Msg.styled";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const Msg = ({ type, text }) => {
  return (
    <MessageContainer type={type}>
      <MessageContent type={type}>
        <MessageWrapper type={type}>
          <div className="text">
            <span>{text}</span>
          </div>
        </MessageWrapper>
        <MessageOptions type={type}>
          <AvatarUser>
            <img src="/images/member/member-1.jpg" alt="User" />
          </AvatarUser>
          <span>{"10:07am"}</span>
          <MessageOptionsDropDown>
            <BiDotsHorizontalRounded />
          </MessageOptionsDropDown>
        </MessageOptions>
      </MessageContent>
    </MessageContainer>
  );
};

export default Msg;
