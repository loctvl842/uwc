import React from 'react'
import { 
  Container,
  Top, 
  Search, 
  Clerk, 
  Body, 
  Avatar, 
  ClerkName,
  SearchContainer} from './ListChat.styled'
import { Link} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {GoDash} from 'react-icons/go'
import {BiExpand, BiDotsHorizontal} from 'react-icons/bi'

const ListChat = props => {
  return (props.trigger) ? (
    <Container>
        <Top>
          <div className='top-chat'> Chat </div>
          <div className='right-section'>
            <BiDotsHorizontal className='icon2'/>
            <BiExpand className='icon1'/>
            <GoDash className='closeButton' onClick={props.onClose} /> 
          </div>
        </Top>
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search here" />
          </Search>
        </SearchContainer>
        <div>
          <Body>
            {Array(18)
              .fill()
              .map(() => {
                return (
                  <Clerk key={uuidv4()} onClick={props.userTrigger}>
                    <Link to="#">
                      <Avatar isLoggined={true}>
                        <img
                          src={`/images/member/member-1.jpg`}
                          alt=""
                        />
                      </Avatar>
                      <ClerkName>
                        Nguyen Van A
                        <span className='msg'>
                          Hello world!
                        </span>
                        <span className='dot'>
                          ·
                        </span>
                        <span className='time'>
                          yesterday
                        </span>
                      </ClerkName>
                    </Link>
                  </Clerk>
                );
              })}
          </Body>
        </div>
    </Container>
  ) : "";
}

export default ListChat
