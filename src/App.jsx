import './App.css';
import { useReducer, useEffect } from 'react';

// ✅ Import local API module you created
import { fetchAPI, submitAPI } from './api';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Reservation from './components/reservation/Reservation';
import Features from './components/features/Features';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

// ✅ Reducer returns new time slots
const updateTimes = (_, newTimes) => newTimes;

const App = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  // ✅ On mount, fetch today's slots using local fetchAPI
  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    dispatch(times);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Reservation
        availableTimes={availableTimes}
        dispatch={(date) => dispatch(fetchAPI(date))}
        submitAPI={submitAPI} // ✅ pass this if needed for form submission
      />
      <Features />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
