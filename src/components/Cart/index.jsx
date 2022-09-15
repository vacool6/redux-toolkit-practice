import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import classes from "../Cart/style.module.css";
const DisplayCard = lazy(() => import("./DisplayCard"));

const Cart = () => {
  const products = useSelector((state) => state.cart);
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
        <Suspense
          fallback={
            <div className={classes.empty}>
              <img
                src="https://media1.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif"
                alt="Loading"
              />
            </div>
          }
        >
          <DisplayCard products={products} />
        </Suspense>
      )}
    </>
  );
};

export default Cart;
