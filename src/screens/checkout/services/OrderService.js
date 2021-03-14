const UpdateOrderItems = (item, orderItems) => {
  let foundEqual = false;
  const newOrderItems = orderItems.map((orderItem) => {
    let newOrderItem = Object.assign({}, orderItem);
    if (orderItem.id === item.id) {
      newOrderItem.quantity = newOrderItem.quantity + 1;
      foundEqual = true;
    }
    return newOrderItem;
  });
  item.quantity = 1;
  return foundEqual ? newOrderItems : [...newOrderItems, item];
};

const CalculateTotalPrice = (orderItems) => {
  let totalPrice = 0;
  orderItems.map((orderItem) => {
    totalPrice = totalPrice + orderItem.price * orderItem.quantity;
  });
  return totalPrice.toFixed(2);
};

export { UpdateOrderItems, CalculateTotalPrice };
