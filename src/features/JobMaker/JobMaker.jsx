import React from "react";
import { GrClose } from "react-icons/gr";
import {
  Container,
  MoveLeft,
  MoveDown,
  FormContainer,
  Header,
  CloseBtn,
  ButtonWrapper,
  CustomButton,
} from "./JobMaker.styled";
import useClickOutside from "@hook/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// features/actions
import { isMakingTurnOff } from "@features/JobMaker/jobMakerSlice";
import {
  currentJobUpdated,
  jobAdded,
  jobUpdated,
  jobRemoved,
} from "@features/Job/jobSlice";
import JobMakerForm from "./JobMakerForm/JobMakerForm";

const JobMaker = () => {
  const { currentJob } = useSelector((state) => state.job);
  let initData = {
    name: "",
    jobs: [],
    mcps: [],
    members: [],
    vehicle: {
      troller: 0,
      truck: 0,
      van: 0,
    },
  };
  if (currentJob != null) {
    initData = currentJob.description;
  }

  const dispatch = useDispatch();
  const [isJobMakerMount, setIsJobMakerMount] = useState(false);
  const {
    pos: jobMakerPos,
    isMaking: isJobMaking,
    isTranslateRight,
    targetDate,
  } = useSelector((state) => state.jobMaker);
  const cardRef = useRef(null);

  // data
  const [name, setName] = useState(initData.name);
  const [vehicle, setVehicle] = useState(initData.vehicle);
  const [mcps, setMCPs] = useState(initData.mcps);
  const [members, setMembers] = useState(initData.members);
  const [jobs, setJobs] = useState(initData.jobs);

  useClickOutside(cardRef, (e) => {
    if (e.target.tagName == "path" || e.target.tagName == "svg") {
      return;
    }
    if (isJobMakerMount) {
      dispatch(isMakingTurnOff());
      dispatch(currentJobUpdated(null));
    }
  });

  useEffect(() => {
    setIsJobMakerMount(isJobMaking);
  }, [isJobMaking]);

  const handleCloseBtnClick = () => {
    dispatch(isMakingTurnOff());
    dispatch(currentJobUpdated(null));
  };

  const handleJobMakerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      vehicle,
      mcps,
      members,
      jobs,
    };
    if (currentJob != null) {
      dispatch(
        jobUpdated({
          date: targetDate,
          description: data,
          targetJobName: currentJob.description.name,
        })
      );
    } else {
      dispatch(jobAdded({ date: targetDate, description: data }));
    }
    dispatch(isMakingTurnOff());
  };

  const handleRemoveJob = () => {
    dispatch(
      jobRemoved({
        date: targetDate,
        targetJobName: currentJob.description.name,
      })
    );
  };

  return (
    <div>
      <Container onSubmit={handleJobMakerSubmit}>
        <MoveLeft posX={jobMakerPos.x}>
          <MoveDown posY={jobMakerPos.y}></MoveDown>
          <FormContainer
            ref={cardRef}
            isTranslateRight={isTranslateRight}
            isJobMakerMount={isJobMakerMount}
          >
            <Header>
              <CloseBtn type="button" onClick={handleCloseBtnClick}>
                <GrClose />
              </CloseBtn>
            </Header>
            <JobMakerForm
              data={{ name, vehicle, mcps, members, jobs }}
              actions={{ setName, setVehicle, setMCPs, setMembers, setJobs }}
            ></JobMakerForm>
            <ButtonWrapper>
              <CustomButton onClick={handleRemoveJob}>Remove</CustomButton>
              <CustomButton type="submit">Save</CustomButton>
            </ButtonWrapper>
          </FormContainer>
        </MoveLeft>
      </Container>
    </div>
  );
};

export default JobMaker;
