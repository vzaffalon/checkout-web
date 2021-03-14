import styled from "styled-components";

const OrderItemListContainer = styled.div`
  width: 192px;
  height: 240px;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: scroll;
  flex: 1;
  list-style-type: none;
`;

const ItemInfo = styled.div`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 15px;
`;

export { OrderItemListContainer, ItemInfo };
