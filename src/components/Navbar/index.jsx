import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Navbar/style.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className={classes.fixed}>
        <div style={{ padding: "0 5rem" }}>
          <div className={classes.container}>
            <div>
              <h3>NAVBAR</h3>
            </div>

            <div className={classes.items}>
              <NavLink to="/" style={{ color: "white" }}>
                HOME
              </NavLink>
              <NavLink to="/cart" style={{ color: "white" }}>
                CART ({cart.length})
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
