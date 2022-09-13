import React from "react";
import { usePaginate } from "../Context/PaginateContext";
import classes from "./style.module.css";

const Pagination = (props) => {
  const { paginate } = usePaginate();
  const { itemsPerPage, totalItems } = props;
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div className={classes.container}>
      {pageNum.map((page) => (
        <span
          key={page}
          className={classes.item}
          onClick={() => paginate(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
