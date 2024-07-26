import React, { useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import BookingPage from '../reservation/BookingPage';
import ConfirmationPage from '../reservation/ConfirmationPage';

const Main = () => {
    
    const seedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) / m;
        }
    };

    const fetchTimeAPI = function(selectedDate) {
        let result = [];
        let random = seedRandom(selectedDate.getDate());
        for (let i = 5; i <= 10; i++) {
            if (random() < 0.5) {
                result.push(i + ":00");
            }
        }
        return result;
    };

    function updateTimes(state, selectedDate) {
        return {availableTimes: fetchTimeAPI(
            new Date()
        )}
    };
    const  initializeTimes = {availableTimes: fetchTimeAPI(
        new Date()
    )};
    const [state, dispatch] = useReducer(
        updateTimes,
        initializeTimes
        // {count: initialCount}
      );

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage 
                    availableTimes={state}
                    dispatch={dispatch}
                />} />
                <Route path="/booking/confirmation" element={<ConfirmationPage 
                    // submitForm={submitForm}
                />} />
            </Routes>
        </main>
    );
};
export default Main;

