import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  DayContainer,
  DayText,
  Header,
  WeekDay,
  JobContainer,
  JobName,
} from "./Day.styled";
import { jobMakerPreMounted } from "@features/JobMaker/jobMakerSlice";
import { selectJobsByDate, currentJobUpdated } from "@features/Job/jobSlice";

const CARD_WIDTH = 450;

const Day = ({ day, rowIdx }) => {
  const jobColRef = useRef();
  const dispatch = useDispatch();
  const { isMaking } = useSelector((state) => state.jobMaker);
  const handleJobClick = (e) => {
    if (!isMaking) {
      const colPos = {
        left: e.target.offsetLeft,
        top: e.target.offsetTop,
      };
      let isTranslateToRight = false;
      const calcPosX = () => {
        const colWidth = jobColRef.current?.clientWidth;
        if (colPos.left - CARD_WIDTH < 0) {
          isTranslateToRight = true;
          return colWidth + colPos.left;
        } else {
          isTranslateToRight = false;
          return colPos.left - CARD_WIDTH;
        }
      };
      const calcPosY = () => {
        return colPos.top - 50;
      };
      dispatch(
        jobMakerPreMounted(
          calcPosX(),
          calcPosY(),
          isTranslateToRight,
          day.format()
        )
      );
    }
  };

  const jobsCreated = useSelector((state) =>
    selectJobsByDate(state, day.format())
  );

  const handleJobNameClick = (j) => {
    dispatch(currentJobUpdated(j));
  };

  return (
    <DayContainer>
      <Header>
        {rowIdx === 0 && <WeekDay>{day.format("ddd").toUpperCase()}</WeekDay>}
        <DayText>{day.format("DD")}</DayText>
      </Header>
      <JobContainer ref={jobColRef} onClick={handleJobClick}>
        {jobsCreated.length !== 0 &&
          jobsCreated.map((j) => (
            <JobName key={uuidv4()} onClick={() => handleJobNameClick(j)}>
              {j.description.name}
            </JobName>
          ))}
      </JobContainer>
    </DayContainer>
  );
};

export default Day;
