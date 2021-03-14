import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ReplayIcon from "@material-ui/icons/Replay";
import {
  CancelButton,
  OrderButton,
  ButtonsGroup,
} from "../styled/OrderButtonsGroupStyled";
import { CalculateTotalPrice } from "../services/OrderService";
import { useHistory } from "react-router-dom";

function OrderButtonsGroup({ orderItems, setOrderItems }) {
  let history = useHistory();

  const goToPaymentScreen = () => {
    history.push("/payment", { orderItems: orderItems });
  };

  return (
    <ButtonsGroup>
      <CancelButton
        onClick={() => {
          setOrderItems([]);
        }}
      >
        <ReplayIcon></ReplayIcon>
        <p>Cancel</p>
      </CancelButton>
      <OrderButton
        onClick={() => {
          goToPaymentScreen();
        }}
      >
        <ShoppingCartIcon></ShoppingCartIcon>
        <p>Order</p>
        <p>$ {CalculateTotalPrice(orderItems)}</p>
      </OrderButton>
    </ButtonsGroup>
  );
}

export default OrderButtonsGroup;
