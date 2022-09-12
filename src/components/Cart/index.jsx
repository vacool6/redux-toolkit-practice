import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../slices/cartSlice";
import classes from "../Cart/style.module.css";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    // console.log(item);
    dispatch(remove(item));
  };
  return (
    <>
      {products.length === 0 ? (
        <div className={classes.empty}>
          <img
            src="https://thebusinessofesports.com/wp-content/uploads/2021/12/the-epic-games-store-shopping-cart-is-here-1920x1080-0a7549b472a9.png"
            alt="Empty cart"
          />
        </div>
      ) : (
        <div style={{ width: "80%" }}>
          <h2 style={{ color: "white", margin: "2rem" }}>CART</h2>
          {products.map((item) => (
            <div className={classes.container}>
              <img src={item.image} alt="image" />
              <p className={classes.des}>{item.description.slice(0, 100)}</p>
              <p>${item.price}</p>

              <button
                className={classes.btn}
                onClick={() => removeItem(item.id)}
              >
                REMOVE
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
