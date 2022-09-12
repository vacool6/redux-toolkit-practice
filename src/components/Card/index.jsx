import React from "react";
import classes from "../Card/style.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../slices/cartSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  const { price, rating, image, description, product } = props;

  const addToCart = (item) => {
    // console.log(item);
    dispatch(add(item));
  };
  return (
    <>
      <div className={classes.container}>
        <img src={image} />
        <p className={classes.des}>{description.slice(0, 100)}</p>
        <p>${price}</p>
        <p>
          Ratings: {rating.rate}/{rating.count}
        </p>
        {/* <p>{rating}</p> */}
        <button className={classes.btn} onClick={() => addToCart(product)}>
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default Card;
