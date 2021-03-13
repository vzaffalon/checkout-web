import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";
import PaymentScreen from "../screens/payment//PaymentScreen";

function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <CheckoutScreen />
          </Route>
          <Route exact path="/payment">
            <PaymentScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainRouter
