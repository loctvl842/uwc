import styled from "styled-components";

export const MessageContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3px;
  padding-bottom: 0%;
`;

export const MessageDivider = styled.div`
  padding-bottom: 5px;
  padding-top: 5px;
  height: 32.5px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  &:before {
    justify-content: center;
    height: 25px;
    color: #131313ab;
    content: attr(data-label);
    display: inline-block;
    font-size: 0.6875rem;
    line-height: 1.8;
    padding: 0.125rem 0.5rem;
    border-radius: 0.1875rem;
    border: 1px solid transparent;
    font-weight: 300;
    letter-spacing: 0.0313rem;
  }
`;

export const MessageContent = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) => (type === "right" ? "flex-end" : "flex-start")};
`;

export const MessageWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: ${({ type }) =>
    type === "right" ? "flex-end" : "flex-start"};
  & > div {
    background-color: #558E4C;
    color: white;
    padding: 5px 10px;
    margin-left: ${({ type }) => (type === "left" ? "2.6rem" : "0")};
    margin-right: ${({ type }) => (type === "right" ? "2.6rem" : "0")};
    border-radius: 3px;
    box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
    text-align: left;
    max-width: 25rem;
    display: inline-block;
    font-size: 0.7rem;
    overflow-wrap: break-word;
  }
`;

export const MessageOptions = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === "right" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  margin-top: 0.3125rem;
  font-size: 0.6rem;
  width: 11rem;
  justify-content: flex-start;
  height: 20px;
  span {
    line-height: 1.125rem;
    height: 1.125rem;
    margin: 0 0.5rem;
    color: #adb5bd;
  }
`;

export const MessageOptionsDropDown = styled.div`
  margin: 0 0.1rem;
  margin-bottom: 0;
  height: 1rem;
  line-height: 1rem;
  color: #adb5bd;
  font-size: 15px;
  position: relative;
  & > svg {
    cursor: pointer;
    &:hover {
      color: #5d646b;
    }
  }
`;

export const AvatarUser = styled.div`
  position: relative;
  z-index: 1;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
