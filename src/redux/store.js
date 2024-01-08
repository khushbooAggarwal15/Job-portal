import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer.js";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
