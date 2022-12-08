import { configureStore } from "@reduxjs/toolkit";
import jobMakerReducer from "./JobMaker/jobMakerSlice";
import monthReducer from "./Month/monthSlice";
import jobReducer from "./Job/jobSlice";

export default configureStore({
  reducer: {
    jobMaker: jobMakerReducer,
    month: monthReducer,
    job: jobReducer,
  },
});
