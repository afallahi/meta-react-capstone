import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm";

describe('Update time', () => {
  test('Returns the same value provided in the state.', () => {
    render(<BookingForm />);

    const updateTime = screen.getByTestId("updateTime");
    fireEvent.change(updateTime, { target: { value: '20:30' }});

    expect(updateTime).toHaveValue('20:30')
  })
})
