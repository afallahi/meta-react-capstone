import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";

import App from "../App";
import BookingForm from '../components/BookingForm';
import { act } from "react-dom/test-utils";



test('Renders the BookingForm heading', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();

    // verify page content for default route
    // verify page content for expected route after navigating
    await user.click(screen.getAllByText(/reservations/i)[0]);
    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
});

test("Renders max date", async () => {
  const twoDigits = (value) => ((value < 10) ? '0' + value : value);
  const today     = new Date();
  today.setDate(today.getDate() + 7);
  const todayStr  = ''
  + today.getFullYear()
  + '-' + twoDigits(today.getMonth() + 1)
  + '-' + twoDigits(today.getDate())
  ;

  render(<App />, {wrapper: BrowserRouter});
  const user = userEvent.setup();

    // verify page content for default route
    // verify page content for expected route after navigating
  await user.click(screen.getAllByText(/reservations/i)[0]);

  expect(screen.getByText(todayStr)).toBeInTheDocument();
});

test('check update Booking', async () => {
  const valCheck   = '5';

  const app  = render(<App />, {wrapper: BrowserRouter});
  const user = userEvent.setup();

    // verify page content for default route
    // verify page content for expected route after navigating
  await user.click(screen.getAllByText(/reservations/i)[0]);

  act(() => {
    fireEvent.change(
      app.container.querySelector('#res-guests')
    , { target: { value: valCheck } }
    );
  });

  expect(app.container.querySelector('#guests-state').textContent).toBe(
    valCheck
  );
});

test('Form Validation UI - time', async () => {
  const availableTimes = {'YYYY-MM-DD': []}
  const currentBooking = {
    date:        'YYYY-MM-DD'
  , time:        ''
  , numOfGuests: 0
  , occasion:    ''
  };

  const bf = render(<BookingForm availableTimes={availableTimes} currentBooking={currentBooking} />);

  expect(screen.getByText('No Times Available')).toBeInTheDocument();
});

test('Form Validation function checkFormFields - bad', async () => {
  const availableTimes = {'YYYY-MM-DD': ['17:00']}
  const currentBookingBad = {
    date:        'YYYY-MM-DD'
  , time:        ''
  , numOfGuests: 0
  , occasion:    ''
  };

  const bf = render(<BookingForm availableTimes={availableTimes} currentBooking={currentBookingBad} />);

  act(() => {
    fireEvent.submit(
      bf.container.querySelector('#booking-form')
    );
  });

  expect(screen.getByText('Warnings')).toBeInTheDocument();
});

test('Form Validation function checkFormFields - good', async () => {
  const availableTimes = {'YYYY-MM-DD': ['17:00']}
  const currentBookingGood = {
    date:        'YYYY-MM-DD'
  , time:        '17:00'
  , numOfGuests: 2
  , occasion:    'birthday'
  };

  const bf = render(<BookingForm availableTimes={availableTimes} currentBooking={currentBookingGood} />);

  act(() => {
    fireEvent.submit(
      bf.container.querySelector('#booking-form')
    );
  });

  expect(screen.getByText('Confirm Booking')).toBeInTheDocument();
});