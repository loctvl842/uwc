import styled from "styled-components";

export const Container = styled.div`
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 281.72px;
        height: 385.79px;
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
        top: 0px;
        background: #558E4C;
        border-radius: 4.87413px 4.87413px 0px 0px;
        .top-chat{
          position: relative;
          width: 46px;
          height: 24px;
          left: 9.74px;
          top: 8.77px;
          font-family: 'Open Sans';//, , ,
    //, 'Cantarell', 'Fira Sans', 'Open Sans', 'Helvetica Neue';
          font-style: normal;
          font-weight: 1000;
          font-size: 25px;
          line-height: 24px;
          text-align: center;
          color: #FFFFFF;
        }
        margin-bottom: 10px;
        .right-section{
          width: 100px;
          height: 41.43px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding-right: 3px;
        }
        .closeButton{
          position: relative;
          width: 32px;
          height: 32px;
          color: white;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        .icon1{
          position: relative;
          width: 28px;
          height: 28px;
          color: white;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        .icon2{
          position: relative;
          width: 28px;
          height: 28px;
          color: white;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
`
export const SearchContainer = styled.div`
        z-index: 1006;
        width:  281.72px;
        height: 45px;
        position: absolute;
        display: flex;
        align-content: space-around;
        top: 41.43px;
        background-color: #ffffffde;
`
export const Search = styled.div`
  position: relative;
  margin-top: 2.5%;
  width: 248.58px;
  height: 15.52px;
  left: calc(50% - 248.58px/2);
  background: #E3E3E3;
  border-radius: 8.28602px;
  input {
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 0.7rem;
      font-weight: 400;
      line-height: 0.5;
      color: #495057;
      background-color: #f6f6f9;
      border: 1px solid #e6ebf5;
      border-radius: 0.5rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      outline: none;
  }
  z-index: 1007;
`   

export const Body = styled.div`
    overflow: scroll;
    margin-top: 0%;
    width: 281.72px;
    height: 333.79px;
    max-height: 100%;
    &::-webkit-scrollbar {
      display: none;
      border-radius: 4.87413px;
    }

`
export const Clerk = styled.div`
  position: relative;
  width: 277.34px;
  height: 58px;
  top: 43px;
  margin-bottom: 0px;
  left: calc(50% - 277.34px/2);
  align-items: center;
  cursor: pointer;
  &:hover {
        background-color: #f6f6f9;
        svg {
          color: white;
        }
      }
  border-radius: 4.87413px;
  border: 0.000003px solid #f3f3f3;
`
export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  min-width: 2rem;
  background-color: transparent;
  position: relative;
  top: 10%;
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
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      top: 35px;
      right: -2px;
      border: 1px solid #fff;
    `}
  }
`
export const ClerkName = styled.div`
  position: absolute;
  left: 60px;
  top: 5.5px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 1000;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #303030;
  .msg{
    position: absolute;
    top: 150%;
    left: 0%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 12px;
    text-align: center;
    color: #5B5959;
  }
  .dot {
    position: absolute;
    top: 150%;
    left: 100%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 12px;
    text-align: center;
    color: #5B5959;
  }
  .time {
    position: absolute;
    top: 150%;
    left: 120%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #5B5959;
  }
` 
export const closeButton = styled.div`
    position: relative;
    width: 46px;
    height: 24px;
    right: 9.74px;
    top: 8.77px;
`
