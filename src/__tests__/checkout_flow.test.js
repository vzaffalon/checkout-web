import React from 'react';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
// var MockAdapter = require('axios-mock-adapter');
// import axios from 'axios';
// var mock = new MockAdapter(axios);
// import itemsMock from '../__mocks__/items';
// import categoriesMock from '../__mocks__/categories';
// import ordersMock from "../__mocks__/orders";
// import ApiConst from "../models/ApiConsts.js";
import userEvent from '@testing-library/user-event';

import MainRouter from '../routers/MainRouter.js';

describe('CheckoutFlow', () => {
  beforeAll(() => {
    // mock
    //   .onGet(`${ApiConst.uri}items`, { params: { category_id: 1 } })
    //   .reply(200, itemsMock);
    // mock
    //   .onGet(`${ApiConst.uri}categories`)
    //   .reply(200, categoriesMock);
    // mock
    //   .onPost(`${ApiConst.uri}orders`)
    //   .reply(200, ordersMock);
  });

  test('should render categories', async () => {
    render(
      <MainRouter></MainRouter>
    );

    await waitFor(() => {
      expect(
        screen.getAllByTestId('category-tabs')[0],
      ).toBeInTheDocument();
    });
  });

  test('should render categories items', async () => {
    render(
      <MainRouter></MainRouter>
    );

    await waitFor(() => {
      expect(
        screen.getAllByTestId('category-items')[0],
      ).toBeInTheDocument();
    });
  });

  test('should add items', async () => {
    render(
      <MainRouter></MainRouter>
    );

    await waitFor(() => {
      expect(
        screen.getAllByTestId('category-items')[0],
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByTestId('category-items')[0]);
    expect(screen.getAllByTestId('order-items').length).toEqual(1)
  });

  test('should render payment screen', async () => {
    render(
      <MainRouter></MainRouter>
    );

    await waitFor(() => {
      expect(
        screen.getAllByTestId('category-items')[0],
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByTestId('category-items')[0]);
    userEvent.click(screen.getByText('Order'));
    await waitFor(() => {
      expect(
        screen.getByTestId('payment-container'),
      ).toBeInTheDocument();
    });
  });

  test('should not process the order', async () => {
    render(
      <MainRouter></MainRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByTestId('payment-container'),
      ).toBeInTheDocument();
    });

    const textboxs = screen.getAllByRole('textbox')
    textboxs.map((textbox) => {
      userEvent.type(
        textbox,
        "4004 40004 4004 40004",
      );
    })
    userEvent.click(screen.getByText('Pay'));

    await waitFor(() => {
      expect(
        screen.getByTestId('confirmation-screen'),
      ).not.toBeInTheDocument();
    });
  });

});
