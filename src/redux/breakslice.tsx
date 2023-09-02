import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: "",
    status: {
      isOnBreak: false,
      startTime: 0,
      endTime: 0,
    },
  },
];

const breakSlice = createSlice({
  name: 'break',
  initialState,
  reducers: {
    toggleBreakForEmployee: (state, action) => {
      const employeeName = action.payload;
      const currentTime = new Date().getTime();

      const employeeIndex = state.findIndex(item => item.name === employeeName);

      if (employeeIndex !== -1) {
        if (state[employeeIndex].status.isOnBreak) {
          state[employeeIndex].status.isOnBreak = false;
          state[employeeIndex].status.endTime = currentTime;
        } else {
          state[employeeIndex].status.isOnBreak = true;
          state[employeeIndex].status.startTime = currentTime;
        }
      } else {
        state.push({
          name: employeeName,
          status: {
            isOnBreak: true,
            startTime: currentTime,
            endTime: 0,
          },
        });
      }
    },
  },
});

export const { toggleBreakForEmployee } = breakSlice.actions;
export default breakSlice.reducer;
