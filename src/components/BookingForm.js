import { useReducer, useState } from "react";

import BookingConfirmation from './BookingConfirmation';
import BookingWarning from "./BookingWarning";
import BookingSuccess from "./BookingSuccess";

const warningReducer = (state, action) => {
  if (action.type === 'push') {
    return [...state, {
      key:  action.key
    , text: action.text
    }];
  }
  else if (action.type === 'pop') {
    return state.filter((item) => (action.key !== item.key));
  }

  return [];
};

const BookingForm = (props) => {

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);

  const [warnings,    reduceWarnings] = useReducer(warningReducer, []);

  const checkFormFields = (e) => {
    e.preventDefault();

    reduceWarnings({type:''});

    let warningCheck = false;
    if (props.currentBooking.numOfGuests < 1) {
      reduceWarnings({
        type: 'push'
      , key:  'guests'
      , text: 'Please select the number of guests.'
      });
      warningCheck = true;
    }
    if (!props.currentBooking.occasion) {
      reduceWarnings({
        type: 'push'
      , key:  'occasion'
      , text: 'Please enter the occasion.'
      });
      warningCheck = true;
    }
    if (props.currentBooking.time === '') {
      reduceWarnings({
        type: 'push'
      , key:  'time'
      , text: 'There are no times available on the date selected.'
      });
      warningCheck = true;
    }

    (warningCheck)
    ? setOpenWarning(true)
    : setOpenConfirm(true)
    ;
  };

  const confirmBooking = () => {
    setOpenConfirm(false);
    props.onSubmit()
  };

  return (
    <form id='booking-form' onSubmit={checkFormFields}>
      <BookingConfirmation
        openState={openConfirm}
        cancel={() => setOpenConfirm(false)}
        confirm={confirmBooking}
        currentBooking={props.currentBooking}
        appElement={document.getElementById('root')}
      />
      <BookingWarning
        openState={openWarning}
        cancel={() => setOpenWarning(false)}
        warnings={warnings}
        appElement={document.getElementById('root')}
      />
      <BookingSuccess
        openState={props.openSuccess}
        message={props.message}
        confirm={() => props.setOpenSuccess(false)}
        appElement={document.getElementById('root')}
      />
      <fieldset>
        <legend><h2>Reserve a Table</h2></legend>
        <h3>Booking Until: <nobr>{props.maxDateStr}</nobr></h3>
        <label htmlFor='res-date'>Date: </label>
        <input
          type="date"
          id='res-date'
          value={props.currentBooking.date}
          min={props.todayStr}
          max={props.maxDateStr}
          onChange={(e) => props.updateBooking({
            type: 'date'
          , value: e.target.value
          })}
        />
        <label htmlFor='res-time'>Time: </label>
        <select
          id='res-time'
          value={props.currentBooking.time}
          onChange={(e) => props.updateBooking({
            type: 'time'
          , value: e.target.value
          })}
        >
          {
            (props.availableTimes[props.currentBooking.date].length > 0)
            ? props.availableTimes[props.currentBooking.date].map(
                (time) => (
                  <option key={time} value={time}>{time}</option>
                )
              )
            : <option key='blank' value=''>No Times Available</option>
          }
        </select>
        <label htmlFor='res-occasion'>Occasion:</label>
        <input
          type="text"
          id='res-occasion'
          maxLength={25}
          value={props.currentBooking.occasion}
          onChange={(e) => props.updateBooking({
            type: 'occasion'
          , value: e.target.value
          })}
        />
        <label htmlFor='res-guests'>Number of Guests:</label>
        <label htmlFor='res-guests' id='guests-state'>{props.currentBooking.numOfGuests}</label>
        <input
          id='res-guests'
          value={props.currentBooking.numOfGuests}
          type="range"
          min={0}
          max={10}
          onChange={(e) => props.updateBooking({
            type: 'numOfGuests'
          , value: e.target.value
          })}
        />
        <input type="submit" value="Confirm Reservation" />
      </fieldset>
    </form>
  );
};

export default BookingForm;