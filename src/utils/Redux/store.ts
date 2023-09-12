import { createSlice, configureStore } from "@reduxjs/toolkit";
const states = createSlice({
  name: "states",
  initialState: {
    counter: 22,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
      state.counter += 1;
    },
  },
});

export const actions = states.actions;
const store = configureStore({
  reducer: states.reducer,
});

export default store;
