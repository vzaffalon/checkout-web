import { Tab, Tabs, GridList, GridListTile, GridListTileBar, ListSubheader } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme.js"
import bucketUri from "./utils/s3-bucket.js"
import { Item, Category, Order } from './models/index.js';

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
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  const ItemsList = () => {
    const classes = useStyles();

    return (<GridList cellHeight={180} className={classes.gridList}>
      <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
        <ListSubheader component="div">December</ListSubheader>
      </GridListTile>
      {items.map((item) => (
        <GridListTile key={item.id}>
          <img src={bucketUri + item.image_id + ".jpg"} alt={"title"} />
          <GridListTileBar
            title={item.name}
            subtitle={<span>$ {item.price}</span>}
            actionIcon={
              <div></div>
            }
          />
        </GridListTile>
      ))}
    </GridList>)
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
          {categories.map((category) => <Tab label={category.name} >
            <ItemsList></ItemsList>
          </Tab>)
          }
        </Tabs>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
