import React, { lazy, Suspense, useEffect } from "react";
import classes from "../Home/style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productSlice";
import { usePaginate } from "../Context/PaginateContext";
const Card = lazy(() => import("../Card"));
const Pagination = lazy(() => import("../Pagination"));

const Home = () => {
  const { lastItemIndex, firstItemIndex } = usePaginate();
  const data = useSelector((state) => state.product.data);
  const status = useSelector((st) => st.product.status);
  const dispatch = useDispatch();
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
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
          </Suspense>
        </>
      )}
    </>
  );
};

export default Home;
