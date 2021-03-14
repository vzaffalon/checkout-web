import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ReplayIcon from "@material-ui/icons/Replay";
import {
  CancelButton,
  PayButton,
  ButtonsGroup,
} from "../styled/PaymentButtonsGroupStyled";
import { CalculateTotalPrice } from "../../checkout/services/OrderService";
import { useHistory } from "react-router-dom";

function PaymentButtonsGroup({ orderItems, pay }) {
  let history = useHistory();

  const cancelPayment = () => {
    history.goBack();
  };

  return (
    <ButtonsGroup>
      <CancelButton
        onClick={() => {
          cancelPayment();
        }}
      >
        <ReplayIcon></ReplayIcon>
        <p>Cancel Payment</p>
      </CancelButton>
      <PayButton type="submit">
        <ShoppingCartIcon></ShoppingCartIcon>
        <p>Pay</p>
        <p>$ {CalculateTotalPrice(orderItems)}</p>
      </PayButton>
    </ButtonsGroup>
  );
}

export default PaymentButtonsGroup;
