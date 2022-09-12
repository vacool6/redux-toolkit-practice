import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      //We should not directly mutate state instead return,
      return [...state, action.payload];
      // state.push(action.payload);
      //This  seems like directly mutating state but it returns new state under the hood.
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
