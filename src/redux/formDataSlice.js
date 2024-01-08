import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    data: {
      name: "",
      phone: "",
      email: "",
      technology: "",
      domain: "",
      experience: "",
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { updateFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
