import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import React from "react";
import bucketUri from "../../../utils/s3-bucket.js";
import useStyles from "../../../utils/material-ui-theme"
import { UpdateOrderItems } from "../services/OrderService.js"

const ItemsList = ({ items, orderItems, setOrderItems }) => {
  const classes = useStyles();

  return (
    <GridList cellHeight={140} className={classes.gridList}>
      {items.map((item) => {
        const imgUri = bucketUri + item.image_id + ".jpg";
        return (
          <GridListTile
            onClick={() => {
              setOrderItems(UpdateOrderItems(item, orderItems));
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
