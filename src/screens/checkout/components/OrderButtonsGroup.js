import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ReplayIcon from "@material-ui/icons/Replay";
import { CancelButton, OrderButton, ButtonsGroup } from "../styled/OrderButtonsGroupStyled"

function OrderButtonsGroup({orderItems, setOrderItems}) {
  const CalculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.map((orderItem) => {
      totalPrice = totalPrice + orderItem.price * orderItem.quantity;
    });
    console.log(totalPrice);
    return totalPrice.toFixed(2);
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
      <OrderButton>
        <ShoppingCartIcon></ShoppingCartIcon>
        <p>Order</p>
        <p>$ {CalculateTotalPrice()}</p>
      </OrderButton>
    </ButtonsGroup>
  );
};

export default OrderButtonsGroup;
