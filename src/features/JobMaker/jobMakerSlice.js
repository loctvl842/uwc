import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  pos: {
    x: 0,
    y: 0,
  },
  isTranslateRight: false,
  isMaking: false,
  targetDate: new Date("2002, 4, 9"),
};

const jobMakerSlice = createSlice({
  name: "jobMaker",
  initialState,
  reducers: {
    isMakingTurnOn: {
      reducer: (state) => {
        state.isMaking = true;
      },
    },
    isMakingTurnOff: {
      reducer: (state) => {
        state.isMaking = false;
      },
    },
    jobMakerPreMounted: {
      reducer: (state, action) => {
        const { posX, posY, isTranslateRight, targetDate } = action.payload;
        state.isMaking = true;
        state.pos = {
          x: posX,
          y: posY,
        };
        state.isTranslateRight = isTranslateRight;
        state.targetDate = targetDate;
      },
      prepare: (posX, posY, isTranslateRight, targetDate) => {
        return {
          payload: {
            posX,
            posY,
            isTranslateRight,
            targetDate,
          },
        };
      },
    },
  },
});

export const { isMakingTurnOn, isMakingTurnOff, jobMakerPreMounted } =
  jobMakerSlice.actions;
export default jobMakerSlice.reducer;
