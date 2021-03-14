import styled from "styled-components";

const ConfirmedBackground = styled.div`
  background: #394752;
  height: 680px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ConfirmedHeader = styled.h1`
  text-align: center;
  color: #5fb67b;
`;

const ConfirmedPaymentHeader = styled.h2`
  text-align: center;
  color: #ffffff;
`;

const StartOtherOrderButton = styled.a`
  text-align: center;
  margin-top: 34px;
  padding: 18px 32px;
  border-radius: 500px;
  background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#40a98f),
    to(#79c068)
  );
  background-image: linear-gradient(270deg, #40a98f, #79c068);
  font-size: 16px;
  line-height: 16px;
`;

export {
  ConfirmedBackground,
  ConfirmedHeader,
  StartOtherOrderButton,
  ConfirmedPaymentHeader,
};
