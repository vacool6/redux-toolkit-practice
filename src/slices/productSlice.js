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
              "https://t.infibeam.com/img/othe/8687242/b9/d0/sonyps5consoledisceditionwhite1.png.ca1a09b9d0.999x600x550.png",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Gaming",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 3,
            price: "20.2",
            image:
              "https://zozila.com/wp-content/uploads/2022/08/108453-gorsel-1_large.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Gaming",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 4,
            price: "20.2",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Gaming",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 5,
            price: "20.2",
            image:
              "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
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
              "https://media.istockphoto.com/photos/closeup-green-sport-pants-sweatpants-jogging-for-men-isolated-on-picture-id1224545469?k=20&m=1224545469&s=612x612&w=0&h=-ChSVUoMX313GNlMNIEmg9zOTlh8xoJyhq9kUyb9sco=",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens fitness",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 7,
            price: "20.2",
            image:
              "http://cdn.shopify.com/s/files/1/2422/9487/products/1Stride_iPadFullproduct_938d180d-ba2e-49b6-8ed7-5362ac8c880e.png?v=1636474917",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens fitness",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 8,
            price: "20.2",
            image:
              "https://post.healthline.com/wp-content/uploads/2020/04/458490-These-Are-the-12-Best-Dumbbells-to-Use-At-Home-According-to-A-Trainer_732x549-thumbnail.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens fitness",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 9,
            price: "20.2",
            image:
              "https://m.media-amazon.com/images/I/71N21tnm0YS._SX425_.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens fitness",
            rating: { rate: "3.4", count: "75" },
            title:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description.",
          },
          {
            id: 10,
            price: "20.2",
            image: "https://i.ytimg.com/vi/J3msSrYP_Dw/maxresdefault.jpg",
            description:
              "Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.",
            category: "Mens fitness",
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
