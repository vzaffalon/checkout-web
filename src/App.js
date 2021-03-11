import { Tab, Tabs, GridList, GridListTile, GridListTileBar, ListSubheader } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme.js"

function App() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [items, setItems] = useState([])

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

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

    return(<GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {items.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={"title"} />
            <GridListTileBar
              title={"title"}
              subtitle={<span>$ 50,00</span>}
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
          <Tab label="All" >
            <ItemsList></ItemsList>
          </Tab>
          <Tab label="Bakery">
            <ItemsList></ItemsList>
          </Tab>
          <Tab label="Entrees">
            <ItemsList></ItemsList>
          </Tab>
          <Tab label="Drinks" >
            <ItemsList></ItemsList>
          </Tab>
        </Tabs>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
