import React, { lazy, Suspense, useEffect, useState } from "react";
import classes from "../View/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../slices/productSlice";
const Slider = lazy(() => import("../Slider"));
const DisplayCard = lazy(() => import("./DisplayCard"));

const View = () => {
  const [product, setProduct] = useState();
  const [relatedProduct, setRelatedProduct] = useState();
  const param = useParams();
  const data = useSelector((state) => state.product.data);
  const status = useSelector((st) => st.product.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      setProduct(data.filter((item) => String(item.id) === param.id));
    }
  }, [data, param.id]);

  useEffect(() => {
    if (product !== undefined && product.length > 0) {
      setRelatedProduct(
        data.filter((item) => String(item.category) === product[0].category)
      );
    }
  }, [product, data]);

  return (
    <>
      {product !== undefined ? (
        product.length !== 0 ? (
          <>
            <h2 style={{ color: "white", margin: "6rem 5rem" }}>
              {product[0].category.toUpperCase()}
            </h2>
            <Suspense
              fallback={
                <div className={classes.loading}>
                  <img
                    src="https://media1.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif"
                    alt="Loading"
                  />
                </div>
              }
            >
              <DisplayCard product={product} />
              <Slider relatedProduct={relatedProduct} />
            </Suspense>
          </>
        ) : (
          <div className={classes.loading}>
            <img
              src="https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif"
              alt="Not found"
            />
          </div>
        )
      ) : status === "error" ? (
        <h2 style={{ color: "white", margin: "6rem 5rem" }}>
          API Busy could not fetch products
        </h2>
      ) : (
        <div className={classes.loading}>
          <img
            src="https://media1.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif"
            alt="Loading"
          />
        </div>
      )}
    </>
  );
};

export default View;
