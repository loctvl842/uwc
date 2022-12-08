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

const ListFieldOpt = ({ optName, items, setItems }) => {
  const [isInputTextFocus, setIsInputTextFocus] = useState(false);
  const [item, setItem] = useState({
    name: "",
    checked: false,
  });

  const addItem = () => {
    const isItemExist = items.find((it) => it.name === item.name) !== undefined;
    if (!isItemExist && item.name !== "") {
      setItems((oldItems) => [...oldItems, item]);
    }
    setItem({ name: "", checked: false });
  };

  const checkAllItems = () => {
    const newItems = items.map((m) => ({ ...m, checked: true }));
    setItems(newItems);
  };

  const removeItems = () => {
    const newItems = items.filter((m) => !m.checked);
    setItems(newItems);
  };

  const toggleChecked = (name) => {
    const newItems = items.map((m) => {
      if (m.name === name) {
        m.checked = !m.checked;
      }
      return m;
    });
    setItems(newItems);
  };

  return (
    <ListField>
      <LabelType width={100}>{optName}: </LabelType>
      <ListContainer>
        <ButtonContainer>
          <InputTextBtnContainer>
            <InputTextBtn
              onFocus={() => setIsInputTextFocus(true)}
              onBlur={() => setIsInputTextFocus(false)}
              value={item.name}
              type="text"
              onChange={(e) => {
                setItem({ name: e.target.value, checked: false });
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  addItem();
                }
              }}
            ></InputTextBtn>
            <InputTextActiveBorder
              isInputTextFocus={isInputTextFocus}
            ></InputTextActiveBorder>
          </InputTextBtnContainer>
          <ActionButton onClick={addItem}>+</ActionButton>
          <ActionButton onClick={removeItems}>
            <BsTrash />
          </ActionButton>
          <ActionButton onClick={checkAllItems}>
            <MdCheckBox />
          </ActionButton>
        </ButtonContainer>
        <UnorderList>
          {items.map((it) => (
            <ListItem key={uuidv4()}>
              <ListStyleType></ListStyleType>
              <MCPname>{it.name}</MCPname>

              <CheckBoxContainer>
                <div
                  onClick={() => {
                    toggleChecked(it.name);
                  }}
                >
                  {it.checked ? (
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
  );
};

const JobMakerForm = ({ data, actions }) => {
  const { name, vehicle, mcps, members, jobs } = data;
  const { setName, setVehicle, setMCPs, setMembers, setJobs } = actions;

  const [isFocus, setIsFocus] = useState(false);

  const handleVehicleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <InputField>
        <LabelType width={100}>Name: </LabelType>
        <InputWrapper>
          <InputText
            type="text"
            placeholder="Input name of job"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                e.preventDefault()
                return;
              }
            }}
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
      <ListFieldOpt
        optName="MCPs"
        items={mcps}
        setItems={setMCPs}
      ></ListFieldOpt>
      <ListFieldOpt
        optName="Members"
        items={members}
        setItems={setMembers}
      ></ListFieldOpt>
      <ListFieldOpt
        optName="Jobs"
        items={jobs}
        setItems={setJobs}
      ></ListFieldOpt>
    </Container>
  );
};

export default JobMakerForm;
