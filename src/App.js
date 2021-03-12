import { Tab, Tabs, GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme.js"
import bucketUri from "./utils/s3-bucket.js"
import { Item, Category, Order } from './models/index.js';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReplayIcon from '@material-ui/icons/Replay';

const ButtonsGroup = styled.div`
    flex-direction: column;
    width: 150px;
`

const Flex = styled.div`
  display: flex;
`

const Row = styled.div`
  flex-direction: row;
`

const CancelButton = styled.div`
  background: #303b41;
  height: 60px;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  justify-content: center;
`

const OrderButton = styled.div`
  background: #394752;
  height: 180px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const OrderItemListContainer = styled.ul`
  width: 192px;
  height: 220px;
  overflow:hidden; 
  overflow-y:scroll;
`

function App() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [orderItems, setOrderItems] = useState([])

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
    getItems(categories[newValue].id);
  }

  const getItems = (category_id) => {
    Item.list({ category_id: category_id }).then(response => {
      setItems(response.data)
    })
  }

  const getCategories = () => {
    Category.list().then(response => {
      if (!categories.length) {
        getItems(response.data[0].category_id)
      }
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories();
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      height: 530,
    },
  }));

  const ItemsList = () => {
    const classes = useStyles();

    return (<GridList cellHeight={140} className={classes.gridList}>
      {items.map((item) => {
        const imgUri = bucketUri + item.image_id + ".jpg"
        return (<GridListTile onClick={() => { setOrderItems([...orderItems, item]) }} key={item.id}>
          <img src={imgUri} alt={"title"} />
          <GridListTileBar
            title={item.name}
            subtitle={<span>$ {item.price}</span>}
            actionIcon={
              <div></div>
            }
          />
        </GridListTile>)
      })}
    </GridList>)
  }

  const OrderItemsList = () => {
    if(!orderItems.length){
      return <p>Add your first item by clicking in a product</p>
    }
    return <OrderItemListContainer>{orderItems.map((item) => {
      return (<li>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </li>)
    })}</OrderItemListContainer>
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Tabs
          value={selectedTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
          aria-label="disabled tabs example"
        >
          {categories.map((category) => <Tab label={category.name} ></Tab>)}
        </Tabs>
        <ItemsList></ItemsList>
        <Flex>
          <div>
            <OrderItemsList></OrderItemsList>
          </div>
          <ButtonsGroup>
            <CancelButton onClick={() => { setOrderItems([]) }}>
              <ReplayIcon></ReplayIcon>
              <p>Cancel</p>
            </CancelButton>
            <OrderButton>
              <ShoppingCartIcon></ShoppingCartIcon>
              <p>Order</p>
            </OrderButton>
          </ButtonsGroup>
        </Flex>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
