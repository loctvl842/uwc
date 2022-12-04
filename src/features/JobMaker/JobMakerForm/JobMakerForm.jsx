import React, { useEffect, useRef, useState } from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
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
} from "./JobMakerForm.styled";

const JobMakerForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isMCPsOpen, setIsMCPsOpen] = useState(false);
  const mcpRef = useRef(null);
  const [vehicle, setVehicle] = useState({
    troller: 0,
    truck: 0,
    van: 0,
  });

  const handleVehicleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (mcpRef.current) {
      setIsMCPsOpen(true);
    }
  }, [mcpRef.current]);

  return (
    <Container>
      <InputField>
        <LabelType width={100}>Name: </LabelType>
        <InputWrapper>
          <InputText
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
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
            <ActionButton>+</ActionButton>
            <ActionButton>
              <BsTrash />
            </ActionButton>
            <ActionButton>
              <MdCheckBox />
            </ActionButton>
            <ActionButton>
              <GoChevronDown />
            </ActionButton>
          </ButtonContainer>
          <UnorderList ref={mcpRef} isMCPsOpen={isMCPsOpen}>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
          </UnorderList>
        </ListContainer>
      </ListField>

      <ListField>
        <LabelType width={100}>Members: </LabelType>
        <ListContainer>
          <ButtonContainer>
            <ActionButton>+</ActionButton>
            <ActionButton>
              <BsTrash />
            </ActionButton>
            <ActionButton>
              <MdCheckBox />
            </ActionButton>
            <ActionButton>
              <GoChevronDown />
            </ActionButton>
          </ButtonContainer>
          <ul>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
            <ListItem>
              <ListStyleType></ListStyleType> loc
            </ListItem>
          </ul>
        </ListContainer>
      </ListField>
    </Container>
  );
};

export default JobMakerForm;
