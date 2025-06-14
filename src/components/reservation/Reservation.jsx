import { useState } from 'react';
import {
  FaRegUser,
  FaRegEnvelope,
  FaPhone,
  FaUserGroup,
  FaCalendarDays,
  FaClock,
  FaCircleArrowRight,
} from 'react-icons/fa6';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

import { submitAPI } from '../../api';

import 'react-datepicker/dist/react-datepicker.css';
import './reservation.css';

const optionsGuest = [
  { value: '', label: 'Choose Guest' },
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
];

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.75rem 0 0.75rem 3rem',
  }),
  control: () => ({
    display: 'flex',
  }),
  input: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'var(--first-color)' : 'var(--title-color)',
    backgroundColor: state.isFocused ? 'var(--container-color)' : 'transparent',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--text-color)',
    transform: state.isFocused ? 'rotate(-180deg)' : 'rotate(0)',
    transition: 'transform 0.5s',
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '210px',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--first-color) var(--container-color)',
  }),
};

const Reservation = ({ availableTimes, dispatch }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(optionsGuest[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState({ value: '', label: 'Choose Time' });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    dispatch(date);
  };

  const capitalizeName = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/;

    if (!nameRegex.test(name)) {
      alert('Please enter a valid name (letters and spaces only).');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number (7–15 digits).');
      return;
    }

    if (!guests.value) {
      alert('Please select the number of guests.');
      return;
    }

    if (!time.value) {
      alert('Please select a reservation time.');
      return;
    }

    const formData = {
      name,
      email,
      phone,
      guests: guests.value,
      date: startDate,
      time: time.value,
    };

    const success = submitAPI(formData);
    if (success) {
      // Capitalize name properly for display
      const formattedName = capitalizeName(name.trim());

      setBookingConfirmed(true);
      setConfirmedData({
        name: formattedName,
        date: startDate.toLocaleDateString(),
        time: time.label,
      });

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setGuests(optionsGuest[0]);
      setStartDate(new Date());
      setTime({ value: '', label: 'Choose Time' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className='reservation reservation-container container'>
      <form onSubmit={handleSubmit} className='reservation-form grid'>
        <div className='reservation-group grid'>
          <h3 className='reservation-title'>Reserve a Table</h3>

          <div className='reservation-div'>
            <FaRegUser className='reservation-icon' />
            <input
              type='text'
              placeholder='Name'
              className='reservation-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='reservation-div'>
            <FaRegEnvelope className='reservation-icon' />
            <input
              type='email'
              placeholder='Email'
              className='reservation-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='reservation-div'>
            <FaPhone className='reservation-icon' />
            <input
              type='tel'
              placeholder='Phone'
              className='reservation-input'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className='reservation-group grid'>
          <div className='reservation-div'>
            <FaUserGroup className='reservation-icon' />
            <Select
              options={optionsGuest}
              styles={customStyles}
              value={guests}
              onChange={setGuests}
            />
          </div>

          <div className='reservation-div'>
            <FaCalendarDays className='reservation-icon' />
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className='reservation-input'
            />
          </div>

          <div className='reservation-div'>
            <FaClock className='reservation-icon' />
            <Select
              options={availableTimes}
              styles={customStyles}
              value={time}
              onChange={setTime}
            />
          </div>

          <button type='submit' className='button reservation-button'>
            Reserve Now <FaCircleArrowRight className='button-icon' />
          </button>
        </div>
      </form>

      {bookingConfirmed && confirmedData && (
        <div className='confirmation-overlay'>
          <div className='confirmation-modal'>
            <h2>🎉 Booking Confirmed!</h2>
            <p>
              Thank you for your reservation <strong>{confirmedData.name}</strong>!
              <br />
              We look forward to serving you at Little Lemon on{' '}
              <strong>{confirmedData.date}</strong> at <strong>{confirmedData.time}</strong>.
            </p>
            <button onClick={() => setBookingConfirmed(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reservation;
