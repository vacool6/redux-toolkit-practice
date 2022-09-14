import React from "react";
import classes from "../Slider/style.module.css";
import Card from "../Card";
const Slider = (props) => {
  const { relatedProduct } = props;
  console.log(relatedProduct);
  return (
    <>
      <div>
        <h2 style={{ color: "white", margin: "6rem 5rem" }}>
          Related products
        </h2>
        <div className={classes.main}>
          <div className={classes.container}>
            {relatedProduct !== undefined &&
              relatedProduct.map((item) => (
                <Card
                  key={item.id}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  description={item.description}
                  product={item}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
