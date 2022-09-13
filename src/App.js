import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import store from "./store";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import PaginateProvider from "./components/Context/PaginateContext";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <PaginateProvider>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </PaginateProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
