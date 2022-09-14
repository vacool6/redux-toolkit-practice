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
      dispatch(
        setProducts([
          {
            id: 1,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 2,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 3,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 4,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 5,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 6,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 7,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 8,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 9,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 10,
            price: "20.2",
            image:
              "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens clothing",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
        ])
      );
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
