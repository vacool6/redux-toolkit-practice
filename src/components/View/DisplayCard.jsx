import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../slices/cartSlice";
import classes from "../View/style.module.css";

const DisplayCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(add(item));
    window.alert("Item added to cart!");
  };

  return (
    <div className={classes.main}>
      <div className={classes.flexBox}>
        <div>
          <img src={product[0].image} alt="Actual product" />
        </div>
        <div className={classes.matter}>
          <p>{product[0].title}</p>
          <p>Price: ${product[0].price}</p>
          <p>
            Ratings: {product[0].rating.rate}/{product[0].rating.count}
          </p>
          <br />
          <br />
          <br />
          <h3>Description</h3>
          <p>{product[0].description}</p>

          <button className={classes.btn} onClick={() => addToCart(product[0])}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
