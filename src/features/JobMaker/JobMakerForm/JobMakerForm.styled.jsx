import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
  flex: 1 1 0%;
  min-height: 300px;
  max-height: 450px;
  overflow: scroll;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LabelType = styled.div`
  width: ${({ width }) => width}px;
  font-weight: 600;
  flex-shrink: 0;
`;

export const InputText = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

export const ActiveBar = styled.div`
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: -5px;
  background-color: #006940;
  transition: transform 0.2s;
  transform: scale(${({ isFocus }) => (isFocus ? 1 : 0)});
`;

export const InActiveBar = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: -5px;
  background-color: #ccc;
`;

export const InputNumber = styled.input`
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  width: 100%;
  &:focus {
    border: 2px solid #006940;
  }
`;

export const OptionType = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionName = styled.span`
  margin-right: 5px;
`;

export const InactiveBorder = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: none;
  border: 1px solid #ccc;
  pointer-events: none;
  border-radius: 5px;
`;

export const InputNumberWrapper = styled.div`
  position: relative;
  width: 50px;
`;

export const ListField = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px 0;
`;

export const ListStyleType = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #006940;
  margin: 10px;
  flex-shrink: 0;
`;

export const ActionButton = styled.div`
  width: 40px;
  height: 100%;
  flex-shrink: 0;
  min-height: 24px;
  border-radius: 5px;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 2px;
  &:hover {
    background: #006940;
    color: #fff;
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const UnorderList = styled.ul`
  width: 100%;
  transition: all 0.2s;
  transform: scaleY(1);
  height: auto;
  overflow: visible;
  will-change: height;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  /* min-height: 24px; */
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  /* height: 0; */
`;

export const ButtonContainer = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 24px;
`;

export const InputTextBtnContainer = styled.div`
  position: relative;
  width: 100%;
  margin-right: 5px;
  /* border-radius: 5px; */
`;

export const InputTextBtn = styled.input`
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  padding: 2px;
  font-size: 0.9rem;
  &:focus {
    border-color: rgba(0, 0, 0, 0);
  }
`;

export const InputTextActiveBorder = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  border: 2px solid
    ${({ isMCPFocus }) => (isMCPFocus ? "#006940" : "rgba(0,0,0,0)")};
  transform: scaleX(${({ isMCPFocus }) => (isMCPFocus ? 1 : 0)});
  border-radius: 5px;
  transition: transform 0.2s;
`;

export const MCPname = styled.span`
  width: 100%;
  margin-right: 5px;
`;

export const CheckBoxContainer = styled.div`
  flex-shrink: 0;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
