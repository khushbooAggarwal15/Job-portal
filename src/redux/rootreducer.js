import { combineReducers } from "@reduxjs/toolkit";
import formDataReducer from "./formDataSlice.js";

const rootReducer = combineReducers({
  formData: formDataReducer,
});

export default rootReducer;
