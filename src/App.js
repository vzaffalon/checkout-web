import {
  Tab,
  Tabs,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";
import bucketUri from "./utils/s3-bucket.js";
import { Item, Category } from "./models/index.js";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ReplayIcon from "@material-ui/icons/Replay";
import tablet from "./images/portrait_black.png";

const ButtonsGroup = styled.div`
  flex-direction: column;
  width: 180px;
`;

const Flex = styled.div`
  display: flex;
`;

const Row = styled.div`
  flex-direction: row;
`;

const CancelButton = styled.div`
  background: #303b41;
  height: 60px;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  justify-content: center;
`;

const OrderButton = styled.div`
  background: #394752;
  height: 180px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OrderItemListContainer = styled.div`
  width: 192px;
  height: 240px;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: scroll;
  flex: 1;
  list-style-type: none;
`;

const AppBackground = styled.div`
  background: #394752c7;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const CheckoutContainer = styled.div` 
  width: 650px;
  height: 800px;
  background-repeat: no-repeat;
  background-size: 650px 800px;
  background-image: url(${tablet});
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CheckoutContainerContent = styled.div`
width: 550px;
`

const DefaultCategory = {
  id: null,
  name: "All",
};

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([DefaultCategory]);
  const [orderItems, setOrderItems] = useState([]);

  console.log(categories);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    getItems(categories[newValue].id);
  };

  const getItems = (category_id) => {
    const params = category_id ? { category_id: category_id } : null;
    Item.list(params).then((response) => {
      setItems(response.data);
    });
  };

  const getCategories = () => {
    Category.list().then((response) => {
      setCategories([...categories, ...response.data]);
    });
  };

  useEffect(() => {
    getCategories();
    getItems();
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      height: 370,
    },
  }));

  const GenerateNewOrderItems = (item) => {
    let foundEqual = false;
    const newOrderItems = orderItems.map((orderItem) => {
      if (orderItem.id === item.id) {
        orderItem.quantity += 1;
        foundEqual = true;
      }
      return orderItem;
    });
    return foundEqual ? newOrderItems : [...newOrderItems, item];
  };

  const ItemsList = () => {
    const classes = useStyles();

    return (
      <GridList cellHeight={140} className={classes.gridList}>
        {items.map((item) => {
          const imgUri = bucketUri + item.image_id + ".jpg";
          return (
            <GridListTile
              onClick={() => {
                setOrderItems(GenerateNewOrderItems(item));
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

  const OrderItemsList = () => {
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

  const CalculateTotalPrice = () => {
    let totalPrice = 0;
    for (var orderItem in orderItems) {
      totalPrice += orderItem.price * orderItem.quantity;
    }
    return totalPrice.toFixed(2);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBackground>
        <CheckoutContainer>
          <CheckoutContainerContent>
            <Tabs
              value={selectedTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              variant="fullWidth"
              aria-label="disabled tabs example"
            >
              {categories.map((category) => (
                <Tab label={category.name}></Tab>
              ))}
            </Tabs>
            <ItemsList></ItemsList>
            <Flex>
              <OrderItemsList></OrderItemsList>
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
            </Flex>
          </CheckoutContainerContent>
        </CheckoutContainer>
      </AppBackground>
    </MuiThemeProvider>
  );
}

export default App;
