import { createSlice } from "@reduxjs/toolkit";

let date = new Date();

export const chosenDateSlice = createSlice({
  name: 'super',
  initialState: {
    value:date,
  },
  reducers: {
    setDateAction: (state, action) => {
      state.value = typeof(action.payload) ==='string' ? action.payload : action.payload.payload;
      console.log(typeof(action.payload))
    },
  },
})

export const { setDateAction } = chosenDateSlice.actions;

export const selectChosenDate = (state) => state.counter.value

export default chosenDateSlice.reducer;
