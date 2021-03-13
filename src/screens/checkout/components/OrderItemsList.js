import React from "react";
import { OrderItemListContainer, ItemInfo } from "../styled/OrderItemListStyled"

const OrderItemsList = ({orderItems}) => {
  return (
    <OrderItemListContainer>
      {!orderItems.length ? (
        <p>Add your first item by clicking in a product</p>
      ) : (
        orderItems.map((item) => {
          return (
            <li>
              <ItemInfo>
                <div>
                  <div>{item.name}</div>
                  <div>{item.quantity}x</div>
                </div>
                <div>$ {item.price}</div>
              </ItemInfo>
            </li>
          );
        })
      )}
    </OrderItemListContainer>
  );
};

export default OrderItemsList;
