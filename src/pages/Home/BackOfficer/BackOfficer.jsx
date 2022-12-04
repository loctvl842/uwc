import React from "react";
import Body from "@components/BackOfficer/Body";
import Features from "@components/BackOfficer/Features";
import ChatButton from "@components/ChatBox/ChatButton";
import ListChat from "@components/ChatBox/ListChat";
import MessageBox from "@components/ChatBox/MessageBox";
import { useState } from "react";
const BackOfficer = () => {
  const [chatPopup, setChatPopup] = useState(false);
  const [chatUserPopup, setUserPopup] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <Body></Body>
      <Features></Features>
      <ChatButton onClick={() => {
        if (chatPopup) setChatPopup(false);
        else setChatPopup(true);
        if (chatUserPopup) {
          if (chatPopup) setChatPopup(false);
          setUserPopup(false);
        }
      }}>

      </ChatButton>
      <ListChat trigger={chatPopup} onClose={() => setChatPopup(false)} userTrigger={() => {
        if (chatUserPopup === false) {
          setChatPopup(false);
          setUserPopup(true);
        } 
      }}>
      </ListChat>
      <MessageBox trigger={chatUserPopup} onClose = {() => setUserPopup(false)} onBack = {() => {
        setUserPopup(false);
        setChatPopup(true);
      }}></MessageBox>
    </div>
  );
};

export default BackOfficer;
