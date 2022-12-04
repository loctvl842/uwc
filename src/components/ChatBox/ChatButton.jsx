
import React from 'react'
import { Container } from "./ChatButton.styled";
import {BsChatRightText} from 'react-icons/bs'
const ChatBox = props => {
  return (
    <Container>
      <BsChatRightText onClick={props.onClick}/>
    </Container>
  )
}

export default ChatBox
