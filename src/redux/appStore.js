import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./departmentSlice"


const appStore = configureStore({
  reducer: {
  department:departmentReducer
  },
});
export default appStore;
