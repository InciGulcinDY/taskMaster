import { createSlice } from "@reduxjs/toolkit";

export const dailyTaskSlice = createSlice({
  name: "dailyTasks",
  initialState: {
    dailyTasks: [],
    subject: "",
    category: "",
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
  },
});

export const { addTask, defineSubject, defineCategory } =
  dailyTaskSlice.actions;

export default dailyTaskSlice.reducer;
