import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import store from "./store";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import View from "./components/View";
import PaginateProvider from "./components/Context/PaginateContext";
import Notfound from "./components/Notfound";
import classes from "../src/App.module.css";

function App() {
  return (
    <>
      <div className={classes.layout}>
        <Provider store={store}>
          <PaginateProvider>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/info/:id">
                  <View />
                </Route>

                <Route>
                  <Notfound />
                </Route>
              </Switch>
            </BrowserRouter>
          </PaginateProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
