import React, { useEffect } from "react";
import Card from "../Card";
import classes from "../Home/style.module.css";
import Pagination from "../Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productSlice";
import { usePaginate } from "../Context/PaginateContext";

const Home = () => {
  const { lastItemIndex, firstItemIndex } = usePaginate();
  const data = useSelector((state) => state.product.data);
  const status = useSelector((st) => st.product.status);
  // console.log(status);
  const dispatch = useDispatch();
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));

    dispatch(fetchProducts());
  }, [dispatch]);

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
          <h2 style={{ color: "white", margin: "6rem 5rem" }}>PRODUCTS</h2>
          <div className={classes.main}>
            <div className={classes.container}>
              {currentItems.map((items) => (
                <Card
                  key={items.id}
                  price={items.price}
                  rating={items.rating}
                  image={items.image}
                  description={items.description}
                  product={items}
                />
              ))}
            </div>
            <Pagination totalItems={data.length} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
