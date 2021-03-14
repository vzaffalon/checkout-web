import styled from "styled-components";

const PaymentContainer = styled.div`
  height: 650px;
  background: #ffffff;
`;

const Flex = styled.div`
  display: flex;
`;

const CreditCardFormContainer = styled.div`
  height: 420px;
  background: #394752;
  overflow-y: scroll;
`;

const PaymentHeader = styled.h2`
  text-align: center;
  color: #5fb67b;
  padding: 25px 0px 5px 0px;
`;

const PaymentInput = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  line-height: 35px;
  margin: 0px 20px 0px 20px;
`;

export {
  PaymentContainer,
  Flex,
  CreditCardFormContainer,
  PaymentHeader,
  PaymentInput,
};
