import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  ERROR: "error",
  LOADING: "loading",
  IDLE: "idle",
});

//THUNK- We cannot write async fun in reducers as they are pure fun so we use thunk

export const fetchProducts = () => {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      dispatch(setProducts(result));
      dispatch(setStatus(STATUS.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
