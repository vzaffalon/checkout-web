import styled from "styled-components";
import tablet from "./images/portrait_black.png"

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
`;
export {
  AppBackground,
  CheckoutContainer,
  CheckoutContainerContent,
};
