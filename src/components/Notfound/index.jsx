import React from "react";
import classes from "../View/style.module.css";

const Notfound = () => {
  return (
    <>
      <div className={classes.loading}>
        <img
          src="https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif"
          alt="Not found"
        />
      </div>
    </>
  );
};

export default Notfound;
