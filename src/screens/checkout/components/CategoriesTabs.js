import React from "react";
import { Tab, Tabs } from "@material-ui/core";

function CategoriesTabs({ categories, selectedTab, handleChange }) {
  return (
    <Tabs
      value={selectedTab}
      textColor="primary"
      onChange={handleChange}
      variant="fullWidth"
      aria-label="disabled tabs example"
      TabIndicatorProps={{style: {background:'#ffffff'}}}
    >
      {categories.map((category) => (
        <Tab label={category.name}></Tab>
      ))}
    </Tabs>
  );
}

export default CategoriesTabs;
