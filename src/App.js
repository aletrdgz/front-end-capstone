import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import BookingPage from './reservation/BookingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
