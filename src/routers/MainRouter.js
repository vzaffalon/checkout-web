import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";
import PaymentScreen from "../screens/payment/PaymentScreen";
import PaymentConfirmedScreen from "../screens/payment/PaymentConfirmedScreen";

function MainRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <CheckoutScreen />
          </Route>
          <Route exact path="/payment">
            <PaymentScreen />
          </Route>
          <Route exact path="/payment_confirmed">
            <PaymentConfirmedScreen />
          </Route>
        </Switch>
    </Router>
  );
}

export default MainRouter
