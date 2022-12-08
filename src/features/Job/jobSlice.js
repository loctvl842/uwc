import { createSlice } from "@reduxjs/toolkit";

// job: {
//   date:
// }

const initialState = {
  jobs: [],
  currentJob: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    jobAdded(state, action) {
      const job = action.payload;
      const jobExist = state.jobs.find(
        (j) => j.description.name === job.description.name
      );
      if (!jobExist) {
        if (job.description.name !== "") {
          state.jobs.push(job);
        }
      }
    },
    jobUpdated(state, action) {
      const { date, description, targetJobName } = action.payload;
      if (description.name === "") {
        return;
      }
      const targetJob = state.jobs.find(
        (j) => j.date === date && j.description.name === targetJobName
      );
      if (targetJob) {
        targetJob.description = description;
      }
    },
    jobRemoved(state, action) {
      const { date, targetJobName } = action.payload;
      state.jobs = state.jobs.filter(
        (j) => !(j.date === date && j.description.name === targetJobName)
      );
    },
    currentJobUpdated(state, action) {
      state.currentJob = action.payload;
    },
  },
});

export default jobSlice.reducer;

export const { jobAdded, jobUpdated, jobRemoved, currentJobUpdated } =
  jobSlice.actions;

export const selectJobsByDate = (state, date) => {
  return state.job.jobs.filter((j) => {
    return j.date === date;
  });
};
