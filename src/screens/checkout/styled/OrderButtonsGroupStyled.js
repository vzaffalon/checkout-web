import styled from "styled-components";

const ButtonsGroup = styled.div`
  flex-direction: column;
  width: 180px;
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

export { ButtonsGroup, CancelButton, OrderButton };
