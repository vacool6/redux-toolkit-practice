import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Navbar/style.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div style={{ backgroundColor: "crimson", padding: "0 2rem" }}>
        <div className={classes.container}>
          <div>
            <h3 style={{ margin: 0 }}>NAVBAR</h3>
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
    </>
  );
};

export default Navbar;
