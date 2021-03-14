import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useStyles from "../../utils/material-ui-theme";
import OrderItemsList from "../checkout/components/OrderItemsList";
import PaymentButtonsGroup from "./components/PaymentButtonsGroup";
import {
  PaymentContainer,
  Flex,
  CreditCardFormContainer,
  PaymentHeader,
} from "./styled/PaymentScreenStyled";
import { Order } from "../../models/index.js";
import { useForm } from "react-hook-form";
import CreditCardForm from "./components/CreditCardForm"

function PaymentScreen() {
  let history = useHistory();
  const location = useLocation();
  const { orderItems } = location.state;
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    pay(data)
  }

  const pay = (data) => {
    const orderItemsParams = orderItems.map((orderItem) => {
        let orderItemParam = {
            item_id: orderItem.id,
            quantity: orderItem.quantity
        }
        return orderItemParam
    })
    const params = {
        order_items: orderItemsParams,
        payment: data
    };
    Order.create(params).then((response) => {
      history.push("/payment_confirmed");
    });
  };

  return (
    <PaymentContainer data-testid="payment-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreditCardFormContainer>
          <PaymentHeader>Insert your credit card data</PaymentHeader>
          <CreditCardForm register={register} errors={errors}/>
        </CreditCardFormContainer>
        <Flex>
          <OrderItemsList orderItems={orderItems} />
          <PaymentButtonsGroup orderItems={orderItems} />
        </Flex>
      </form>
    </PaymentContainer>
  );
}

export default PaymentScreen;
