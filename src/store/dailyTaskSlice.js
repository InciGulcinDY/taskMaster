import { createSlice } from "@reduxjs/toolkit";

export const dailyTaskSlice = createSlice({
  name: "dailyTasks",
  initialState: {
    dailyTasks: [],
    subject: "",
    category: "",
    time: null,
  },
  reducers: {
    addTask: (state, action) => {
      const dailyTask = action.payload;

      state.dailyTasks.push(dailyTask);
    },
    defineSubject: (state, action) => {
      const subject = action.payload;
      state.subject = subject;
    },
    defineCategory: (state, action) => {
      const category = action.payload;
      state.category = category;
    },
    defineTime: (state, action) => {
      const time = action.payload;
      state.time = time;
    },
  },
});

export const { addTask, defineSubject, defineCategory, defineTime } =
  dailyTaskSlice.actions;

export default dailyTaskSlice.reducer;
