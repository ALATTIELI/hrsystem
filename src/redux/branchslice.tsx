import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: "",
  sessionStart: 0,
};
const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    startSession: (state, action) => {
      state.branch = action.payload.branch;
      state.sessionStart = Date.now();
    },
    clearSession: (state) => {
      state.branch = "";
      state.sessionStart = 0;
    },
  },
});

export const { startSession, clearSession } = branchSlice.actions;
export default branchSlice.reducer;
