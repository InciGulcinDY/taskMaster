import { configureStore } from "@reduxjs/toolkit";
import dailyTaskReducer from "./dailyTaskSlice";

export default configureStore({
  reducer: {
    dailyTask: dailyTaskReducer,
  },
});
