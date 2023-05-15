import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, onSubmit }) {

    const [booking, setBooking] = useState({date: '', time: '', guests: 0, occasion: ''});
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(booking);
        setBooking({date: '', time: '', guests: 0, occasion: ''});
        navigate('/confirmation');
      };
    
    return (
        <div className='booking-container'>
        <form className='booking-form' onSubmit={handleSubmit}>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            value={booking.date}
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
            required
          />
          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time'
            data-testid='updateTime'
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
            required
          >
            {Array.isArray(availableTimes) ? (
              availableTimes.map((item, index) => (
                <option key={index}>{item}</option>
              ))
            ) : (
              <option>Loading times...</option>
            )}
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            min='1'
            max='10'
            id='guests'
            value={booking.guests}
            onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
            required
          />
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            value={booking.occasion}
            onChange={(e) => setBooking({ ...booking, occasion: e.target.value })}
            required
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type='submit' value='Make Your reservation' />
        </form>
      </div>
      );
}

export default BookingForm;