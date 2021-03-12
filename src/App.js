import { Tab, Tabs, GridList, GridListTile, GridListTileBar, ListSubheader, TabPanel } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme.js"
import bucketUri from "./utils/s3-bucket.js"
import { Item, Category, Order } from './models/index.js';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReplayIcon from '@material-ui/icons/Replay';

const Col = styled.div`
    flex-direction: column;
`

const Flex = styled.div`
  display: flex;
`

const Row = styled.div`
  flex-direction: row;
`

const CancelButton = styled.div`
  background: #303b41;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const OrderButton = styled.div`
  background: #394752;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])

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
      height: 350,
    },
  }));

  const ItemsList = () => {
    const classes = useStyles();

    return (<GridList cellHeight={140} className={classes.gridList}>
      {items.map((item) => {
        const imgUri = bucketUri + item.image_id + ".jpg"
        console.log(imgUri)
        return(<GridListTile key={item.id}>
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
    return <div></div>
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
          <Col>
            <OrderItemsList></OrderItemsList>
          </Col>
          <Col>
            <CancelButton>
              <ReplayIcon></ReplayIcon>
            </CancelButton>
            <OrderButton>
              <ShoppingCartIcon></ShoppingCartIcon>
            </OrderButton>
          </Col>
        </Flex>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
