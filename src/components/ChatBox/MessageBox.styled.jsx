import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

export const Container = styled.div`
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 281.72px;
        height: 385.79px;
        // right: 320px;
        right: 24px;
        bottom: 94px;
        z-index: 1002;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.25) 2.5px 2.5px 3px 0px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        border-radius: 4.87413px 4.87413px 4.87413px 4.87413px;
`
export const Top = styled.div`
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 281.72px;
        height: 41.43px;
        left: calc(50% - 281.72px/2);
        background: #558E4C;
        border-radius: 4.87413px 4.87413px 0px 0px;
        align-items: center;
        .right-section{
          width: 56px;
          height: 41.43px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding-right: 3px;
        }
        .back-icon{
          position: relative;
          display: flex;
          width: 22px;
          margin-left: 10px;
          margin-right: 15px;
          height: 22px;
          color: #FFFFFF;
          cursor: pointer;
        }
        .closeButton{
          position: relative;
          width: 32px;
          height: 32px;
          color: white;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        .expand-icon{
          position: relative;
          width: 22px;
          height: 22px;
          color: white;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        .call-icon{
          padding-right: 2px;
          position: relative;
          width: 24px;
          height: 24px;
          color: white;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }

`
export const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  margin-left: -10px;
  margin-right: 0px;
  img {
    margin-top: auto;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  &:before {
    ${(props) =>
      props.isLoggined &&
      `
      background: #44a675;
      content: "";
      display: block;
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      top: 22px;
      right: 0px;
      border: 1px solid #fff;
    `}
  }
`
export const ClerkName = styled.div`
  display: flex;
  position: relative;
  padding-right: 10%;
  font-family: 'Inter';
  font-weight: 900;
  font-size: 18px;
  line-height: 14px;
  text-align: center;
  color: white;
`
export const ChatFooter = styled.form`
  display: flex;
  z-index: 10;
  width: 281.72px;
  height: 41.43px;
  background-color: #ffffffcc;
  border-top: 1px solid #eaeaf1;
  position: relative;
  //top: 291.72px;
  border-radius: 4.87413px 4.87413px 4.87413px 4.87413px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    cursor: pointer;
    align-self: center;
    height: 60%;
    border-style: none;
    border: 1 solid #4eac6d;
    padding: 0.1rem;
    margin-right: 0.3rem;
    background-color: #558E4C;
    border-radius: 4px;
    &:hover {
      background-color: #4eac6d;
    }
    &:active {
      transform: scale(0.965);
    }
    svg {
      color: white;
    }
  }

  svg {
    font-size: 1rem;
    color: #797c8c;
  }

  @media screen and (max-width: 1200px) {
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  width: 100%;
  & div.enter-text {
    width: 100%;
    min-height: 35px;
    input {
      width: 100%;
      padding: 2px 4px;
      background-color: #ffffff;
      border: 0;
      font-size: 0.8rem;
      border: 1px solid #e6ebf5;
      border-radius: 0.25rem;
      color: #495057;
      &:focus {
        outline: none;
      }
    }
  }
  & div {
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.2rem;
    position: relative;
    & > div {
      position: absolute;
      bottom: 20px;
      right: 0;
    }
    &:hover {
      svg {
        color: #5d646b;
        cursor: pointer;
      }
    }
  }
  & div.images,
  & div.attachment {
    & svg {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
    }
  }
`
export const BodyContainer = styled(ScrollToBottom)`
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  z-index: 1010;
  & > div {
    z-index: 1030;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BodyContent = styled.div`
  width: 100%;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 60vh;

  & > div {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
;
