import React, { useEffect, useState } from "react";
import classes from "../View/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProducts } from "../../slices/productSlice";
import { add } from "../../slices/cartSlice";

const View = () => {
  const [product, setProduct] = useState();
  const param = useParams();
  const data = useSelector((state) => state.product.data);
  const status = useSelector((st) => st.product.status);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = (item) => {
    dispatch(add(item));
    window.alert("Item added to cart!");
    history.push("/");
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      setProduct(data.filter((item) => String(item.id) === param.id));
    }
  }, [data, param.id]);

  return (
    <>
      {product !== undefined ? (
        product.length !== 0 ? (
          <>
            <h2 style={{ color: "white", margin: "6rem 5rem" }}>
              {product[0].category.toUpperCase()}
            </h2>
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

                  <button
                    className={classes.btn}
                    onClick={() => addToCart(product[0])}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
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
