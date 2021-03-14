import React, { useEffect, useState } from "react";
import { Item, Category } from "../../models/index.js";
import CategoriesTabs from "./components/CategoriesTabs";
import ItemsList from "./components/ItemsList";
import OrderButtonsGroup from "./components/OrderButtonsGroup";
import OrderItemsList from "./components/OrderItemsList";
import { Flex } from "./styled/CheckoutScreenStyled";

const DefaultCategory = {
  id: null,
  name: "All",
};

function CheckoutScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([DefaultCategory]);
  const [orderItems, setOrderItems] = useState([]);

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

  return (
    <>
      <CategoriesTabs
        categories={categories}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
      <ItemsList
        items={items}
        orderItems={orderItems}
        setOrderItems={setOrderItems}
      />
      <Flex>
        <OrderItemsList orderItems={orderItems} />
        <OrderButtonsGroup
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
      </Flex>
    </>
  );
}

export default CheckoutScreen;
