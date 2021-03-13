import React from "react";
import { OrderItemListContainer } from "../styled/OrderItemListStyled"

const OrderItemsList = ({orderItems}) => {
  return (
    <OrderItemListContainer>
      {!orderItems.length ? (
        <p>Add your first item by clicking in a product</p>
      ) : (
        orderItems.map((item) => {
          return (
            <li>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </li>
          );
        })
      )}
    </OrderItemListContainer>
  );
};

export default OrderItemsList;
