import {Routes , Route, Outlet} from  "react-router-dom";
import React, { useEffect, useReducer, useState } from 'react';
import HomePage from "./HomePage";
import BookingForm from './BookingForm';
import {fetchAPI, submitAPI} from "../api.js";


const twoDigits  = (value) => ((value < 10) ? '0' + value : value);
const dateStr    = (date)  => (
    date.getFullYear()
  + '-' + twoDigits(date.getMonth() + 1)
  + '-' + twoDigits(date.getDate())
);
let today;
let todayStr;
let maxDateStr;

const timeReducer = (state, action) => {
    const newTimes = state[action.date].filter(
      (time) => (time !== action.time)
    );
    return {
      ...state
    , [action.date]: (newTimes.length > 0) ? [].concat(newTimes) : []
    };
  };
  
  const bookingReducer = (state, action) => {
    switch (action.type) {
      case 'date': {
        return {...state, date: action.value};
      }
      case 'time': {
        return {...state, time: action.value};
      }
      case 'numOfGuests': {
        return {...state, numOfGuests: action.value};
      }
      case 'occasion': {
        return {...state, occasion: action.value};
      }
      case 'all':
      default: {
        return {
          date:        action.default.date
        , time:        action.default.time || ''
        , numOfGuests: action.default.numOfGuests
        , occasion:    action.default.occasion
        };
      }
    };
  };

  const intializeAvailableTimes = () => {
    today    = new Date();
    todayStr = dateStr(today);
  
    const initAvailableTimes = {};
    initAvailableTimes[todayStr] = [].concat([].concat(fetchAPI(today)));
    const newDate = new Date();
    for (let i = 1; i < 8; i++) {
      newDate.setDate(today.getDate() + i);
      initAvailableTimes[dateStr(newDate)] = [].concat(fetchAPI(newDate));
  
      if (i === 7) { maxDateStr = dateStr(newDate); }
    }
  
    return initAvailableTimes;
  };
  

const Main = () => {

    const [openSuccess, setOpenSuccess] = useState(false);
    const [successMsg,  setSuccessMsg]  = useState('There was an issue reverving your table. Please try again.');
  
    const [availableTimes, reduceAvailableTimes] = useReducer(
      timeReducer
    , null
    , intializeAvailableTimes
    );
  
    const [currentBooking, updateCurrentBooking] = useReducer(
      bookingReducer
    , {
        date:        todayStr
      , time:        availableTimes[todayStr][0]
      , numOfGuests: 0
      , occasion:    ''
      }
    );
  
    const onBookingSubmit = () => {
      if (submitAPI()) {
        setSuccessMsg('Booking successfull');
        reduceAvailableTimes(currentBooking);
      }
      setOpenSuccess(true);
    };
  
    useEffect(() => {
      updateCurrentBooking({default: {
        date:        todayStr
      , time:        availableTimes[todayStr][0]
      , numOfGuests: 0
      , occasion:    ''
      }});
    }, [availableTimes]);

    
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    exact path="/booking"
                    element={
                        <BookingForm
                            todayStr={todayStr}
                            maxDateStr={maxDateStr}
                            availableTimes={availableTimes}
                            onSubmit={onBookingSubmit}
                            currentBooking={currentBooking}
                            updateBooking={updateCurrentBooking}
                            message={successMsg}
                            setOpenSuccess={setOpenSuccess}
                            openSuccess={openSuccess}
                        />
                    }
                />
                <Route path=":slug" element={ <HomePage /> } />
            </Routes>
            <Outlet />
        </main>
        
    );
}

export default Main;