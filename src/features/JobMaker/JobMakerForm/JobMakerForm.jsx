import React, { useEffect, useRef, useState } from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  InputField,
  InputWrapper,
  LabelType,
  InputText,
  ActiveBar,
  InActiveBar,
  InputNumber,
  OptionType,
  OptionName,
  InputNumberWrapper,
  InactiveBorder,
  ListField,
  ListItem,
  ListStyleType,
  ActionButton,
  ButtonContainer,
  ListContainer,
  UnorderList,
  InputTextBtn,
  InputTextBtnContainer,
  InputTextActiveBorder,
  MCPname,
  CheckBoxContainer,
} from "./JobMakerForm.styled";

const JobMakerForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isMCPFocus, setIsMCPFocus] = useState(false);
  const [mcps, setMCPs] = useState([]);
  const [mcp, setMCP] = useState({
    name: "",
    checked: false,
  });
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState({
    troller: 0,
    truck: 0,
    van: 0,
  });

  const handleVehicleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const addMCP = () => {
    const isMCPexist = mcps.find((m) => m.name === mcp.name);
    if (!isMCPexist && mcp.name !== "") {
      setMCPs((oldMCPs) => [...oldMCPs, mcp]);
    }
    setMCP({ name: "", checked: false });
  };

  const toggleChecked = (name) => {
    const newMCPs = mcps.map((m) => {
      if (m.name === name) {
        m.checked = !m.checked;
      }
      return m;
    });
    setMCPs(newMCPs);
  };

  const checkAllMCP = () => {
    const newMCPs = mcps.map((m) => ({ ...m, checked: true }));
    setMCPs(newMCPs);
  };

  const removeMCP = () => {
    const newMCPs = mcps.filter((m) => !m.checked);
    setMCPs(newMCPs);
  };

  return (
    <Container>
      <InputField>
        <LabelType width={100}>Name: </LabelType>
        <InputWrapper>
          <InputText
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></InputText>
          <InActiveBar></InActiveBar>
          <ActiveBar isFocus={isFocus}></ActiveBar>
        </InputWrapper>
      </InputField>
      <InputField>
        <LabelType width={100}>Vehicles: </LabelType>
        <InputWrapper>
          <OptionType>
            <OptionName>Troller </OptionName>
            <InputNumberWrapper>
              <InputNumber
                type="number"
                min="0"
                max="5"
                name="troller"
                value={vehicle.troller}
                onChange={handleVehicleChange}
              />
              <InactiveBorder></InactiveBorder>
            </InputNumberWrapper>
          </OptionType>
          <OptionType>
            <OptionName>Truck</OptionName>
            <InputNumberWrapper>
              <InputNumber
                type="number"
                min="0"
                max="5"
                name="truck"
                value={vehicle.truck}
                onChange={handleVehicleChange}
              />
              <InactiveBorder></InactiveBorder>
            </InputNumberWrapper>
          </OptionType>
          <OptionType>
            <OptionName>Van</OptionName>
            <InputNumberWrapper>
              <InputNumber
                type="number"
                min="0"
                max="5"
                name="van"
                value={vehicle.van}
                onChange={handleVehicleChange}
              />
              <InactiveBorder></InactiveBorder>
            </InputNumberWrapper>
          </OptionType>
        </InputWrapper>
      </InputField>
      <ListField>
        <LabelType width={100}>MCPs: </LabelType>
        <ListContainer>
          <ButtonContainer>
            <InputTextBtnContainer>
              <InputTextBtn
                onFocus={() => setIsMCPFocus(true)}
                onBlur={() => setIsMCPFocus(false)}
                value={mcp.name}
                onChange={(e) => {
                  setMCP({ name: e.target.value, checked: false });
                }}
                onKeyUp={(e) => {
                  e.preventDefault();
                  if (e.key == "Enter") {
                    addMCP();
                  }
                }}
              ></InputTextBtn>
              <InputTextActiveBorder
                isMCPFocus={isMCPFocus}
              ></InputTextActiveBorder>
            </InputTextBtnContainer>
            <ActionButton onClick={addMCP}>+</ActionButton>
            <ActionButton onClick={removeMCP}>
              <BsTrash />
            </ActionButton>
            <ActionButton onClick={checkAllMCP}>
              <MdCheckBox />
            </ActionButton>
          </ButtonContainer>
          <UnorderList>
            {mcps.map((mcp) => (
              <ListItem key={uuidv4()}>
                <ListStyleType></ListStyleType>
                <MCPname>{mcp.name}</MCPname>

                <CheckBoxContainer>
                  <div
                    onClick={() => {
                      toggleChecked(mcp.name);
                    }}
                  >
                    {mcp.checked ? (
                      <MdCheckBox />
                    ) : (
                      <MdOutlineCheckBoxOutlineBlank />
                    )}
                  </div>
                </CheckBoxContainer>
              </ListItem>
            ))}
          </UnorderList>
        </ListContainer>
      </ListField>
    </Container>
  );
};

export default JobMakerForm;
