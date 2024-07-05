import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import BookingPage from './reservation/BookingPage';
import ConfirmationPage from './reservation/ConfirmationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;
