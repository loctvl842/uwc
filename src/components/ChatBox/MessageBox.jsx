import React from 'react'
import { 
    Container,
    Top,
    Avatar,
    InputGroup,
    ChatFooter,
    ClerkName,
    BodyContainer,
    BodyContent,
} from './MessageBox.styled'
import {
  MessageDivider
} from "./Msg.styled";
import {GoDash} from 'react-icons/go'
import {IoIosCall, IoMdArrowRoundBack} from 'react-icons/io'
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { ImImages, ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import Msg from "./Msg"
const MessageBox = props => {
    return (props.trigger) ? (
        <Container>
            <Top>
                <IoMdArrowRoundBack className='back-icon' onClick={props.onBack}/>
                <Avatar isLoggined={true}>
                    <img
                        src={`/images/member/member-1.jpg`}
                        alt=""
                    />
                </Avatar>
                <ClerkName> Nguyen Van A </ClerkName>
                <div className='right-section'>
                  <IoIosCall className='call-icon'/>
                  <GoDash className='closeButton' onClick={props.onClose}/> 
                </div>
            </Top>
            <BodyContainer>
              <BodyContent>
                <MessageDivider data-label={"Monday"}></MessageDivider>
                <Msg type="left" text="Hello"></Msg>
                <Msg type="right" text="Hi. How are you"></Msg>
                <MessageDivider data-label={"Yesterday"}></MessageDivider>
                <Msg type="left" text="I'm fine. Thank you. And you?"></Msg>
                <Msg type="left" text="Hello?"></Msg>
                <Msg type="right" text="I'm fine. Thanks."></Msg>
              </BodyContent>
            </BodyContainer>
            <ChatFooter>
              <InputGroup>
                <div className="images">
                  <label htmlFor="images">
                    <ImImages />
                  </label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="images"
                    multiple
                    accept="image/*"
                  />
                </div>
                <div className="attachment">
                  <label htmlFor="attachment">
                    <ImAttachment />
                  </label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="attachment"
                    multiple
                    accept=".xlsx,.xls,.doc, .docx, .ppt, .pptx,.txt, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  />
                </div>
                <div>
                  <MdOutlineInsertEmoticon/>
                </div>
                <div className="enter-text">
                  <input type="text" placeholder="Enter your message..."></input>
                </div>
              </InputGroup>
            <button type="submit">
              <AiOutlineSend />
            </button>
          </ChatFooter>
        </Container>
    ) : ""
}

export default MessageBox