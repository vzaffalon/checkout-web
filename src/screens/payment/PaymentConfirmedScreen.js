import React from "react";
import {
  ConfirmedHeader,
  ConfirmedBackground,
  StartOtherOrderButton,
  ConfirmedPaymentHeader,
} from "./styled/PaymentConfirmedStyled";
import { useHistory } from "react-router-dom";

function PaymentConfirmedScreen() {
  let history = useHistory();
  return (
    <ConfirmedBackground data-testid="confirmation-screen">
      <ConfirmedHeader>Order Created</ConfirmedHeader>
      <ConfirmedPaymentHeader>
        Payment Completed With Success
      </ConfirmedPaymentHeader>
      <StartOtherOrderButton
        onClick={() => {
          history.replace("/");
        }}
      >
        Start another order
      </StartOtherOrderButton>
    </ConfirmedBackground>
  );
}

export default PaymentConfirmedScreen;
