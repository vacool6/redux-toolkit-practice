import React from "react";
import { useHistory } from "react-router-dom";
import classes from "../Card/style.module.css";

const Card = (props) => {
  const { price, rating, image, description, product } = props;
  const history = useHistory();
  return (
    <>
      <div className={classes.container}>
        <img src={image} alt="pic" />
        <p className={classes.des}>{description.slice(0, 60)}</p>
        <p>${price}</p>
        <p>
          Ratings: {rating.rate}/{rating.count}
        </p>
        <button
          className={classes.btn}
          onClick={() => history.push(`/info/${product.id}`)}
        >
          MORE INFO
        </button>
      </div>
    </>
  );
};

export default Card;
