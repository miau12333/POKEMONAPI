import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    changeName: (state, action) => {
      const userName = action.payload; //me trae la funtion del donde se esta haciendo en este caso login
      return userName;
    }
  }
});

export const { changeName } = userNameSlice.actions;

export default userNameSlice.reducer;
