import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import React from "react";
import bucketUri from "../../../utils/s3-bucket.js";
import useStyles from "../../../utils/material-ui-theme"

const ItemsList = ({ items, orderItems, setOrderItems }) => {
  const classes = useStyles();

  const UpdateOrderItems = (item) => {
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

  return (
    <GridList cellHeight={140} className={classes.gridList}>
      {items.map((item) => {
        const imgUri = bucketUri + item.image_id + ".jpg";
        return (
          <GridListTile
            onClick={() => {
              setOrderItems(UpdateOrderItems(item));
            }}
            key={item.id}
          >
            <img src={imgUri} alt={"title"} />
            <GridListTileBar
              title={item.name}
              subtitle={<span>$ {item.price}</span>}
              actionIcon={<div></div>}
            />
          </GridListTile>
        );
      })}
    </GridList>
  );
};

export default ItemsList;
