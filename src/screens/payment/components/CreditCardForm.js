import React, { useEffect, useState } from "react";
import { PaymentInput } from "../styled/PaymentScreenStyled";

function CreditCardForm({ register, errors }) {
  return (
    <>
      <PaymentInput>
        <label for="holder_name">Holder Name</label>
        <input
          name="holder_name"
          ref={register({ required: true })}
          label="card holder name"
        />
        {errors.holder_name && <span>This field is required</span>}
      </PaymentInput>

      <PaymentInput>
        <label for="card_number">Card Number</label>
        <input
          name="card_number"
          ref={register({ required: true })}
          label="card number"
          placeholder="4444 4444 4444 4444"
        />
        {errors.card_number && <span>This field is required</span>}
      </PaymentInput>

      <PaymentInput>
        <label for="exp_month">Exp Month</label>
        <input
          name="exp_month"
          ref={register({ required: true })}
          label="exp month"
          placeholder="5"
        />
        {errors.exp_month && <span>This field is required</span>}
      </PaymentInput>

      <PaymentInput>
        <label for="exp_year">Exp Year</label>
        <input
          name="exp_year"
          ref={register({ required: true })}
          label="exp year"
          placeholder="2022"
        />
        {errors.exp_year && <span>This field is required</span>}
      </PaymentInput>

      <PaymentInput>
        <label for="cvv">CVV</label>
        <input
          name="cvv"
          ref={register({ required: true })}
          label="cvv"
          placeholder="444"
        />
        {errors.cvv && <span>This field is required</span>}
      </PaymentInput>
    </>
  );
}

export default CreditCardForm;
