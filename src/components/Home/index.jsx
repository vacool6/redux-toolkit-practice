import React, { useEffect, useState } from "react";
import Card from "../Card";
import classes from "../Home/style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productSlice";

const Home = () => {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.product.data);
  const status = useSelector((st) => st.product.status);
  console.log(status);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));

    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <div className={classes.loading}>
          <img
            src="https://media1.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif"
            alt="Loading"
          />
        </div>
      ) : (
        <>
          <h2 style={{ color: "white", margin: "2rem" }}>PRODUCTS</h2>
          <div className={classes.main}>
            <div className={classes.container}>
              {data.map((items) => (
                <div key={items.id}>
                  <Card
                    price={items.price}
                    rating={items.rating}
                    image={items.image}
                    description={items.description}
                    product={items}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
