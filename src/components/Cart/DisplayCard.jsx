import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../slices/cartSlice";
import classes from "../Cart/style.module.css";

const DisplayCard = (props) => {
  const { products } = props;
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(remove(item));
  };
  return (
    <div style={{ width: "80%", margin: "5rem 0" }}>
      <h2 style={{ color: "white", margin: "6rem 5rem" }}>CART</h2>
      {products.map((item) => (
        <div className={classes.container} key={item.id * Math.random()}>
          <img src={item.image} alt="item" />
          <p className={classes.des}>{item.description.slice(0, 100)}</p>
          <p>${item.price}</p>

          <button className={classes.btn} onClick={() => removeItem(item.id)}>
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
