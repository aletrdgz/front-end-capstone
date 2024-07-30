import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import BookingPage from '../reservation/BookingPage';
import UserDetailsForm from '../reservation/UserDetailsForm';
import ConfirmedBooking from "../reservation/ConfirmedBooking";

const Main = () => {

    const fetchTimeAPI = function(selectedDate) {
        let result = [];
        function random() {
            return Math.random();
        }
        for (let i = 5; i <= 10; i++) {
            if (random() < 0.5) {
                result.push(i + ":00");
            }
        }
        return result;
    };

    const submitAPI = function(e) {
        return true;
    };

    const navigate = useNavigate();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };
    // or alert
    async function submitForm (e){
        await sleep(1000);
        if(submitAPI(e)){
            navigate("/confirmed")
        };
    };

    function updateTimes(timeState, selectedDate) {
        return {availableTimes: fetchTimeAPI(
            new Date()
        )}
    };
    const initializeTimes = {availableTimes: fetchTimeAPI(
        new Date()
    )};
    const [timeState, timeDispatch] = useReducer(
        updateTimes,
        initializeTimes
      );

    const setReservation = function(reservationSubmit) {
        let result = reservationSubmit
        // {
        //     // "seating" : selectedSeating.label,
        //     // "occasion" : selectedOccasion.label,
        //     // "date" : formattedDate,
        //     // "time" : selectedTime.label,
        //     // "diners" : selectedDiners.label,
        //     };
        return result;
    };

    function updateReservation(reservationState, reservationSubmit) {
            return {reservation: setReservation(
                reservationSubmit
                // {}
            )}
    };
    const initializeReservation = {reservation: setReservation(
            // {}
    )};
    const [reservationState, reservationDispatch] = useReducer(
        updateReservation,
        initializeReservation
        );

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage
                    availableTimes={timeState}
                    timeDispatch={timeDispatch}
                    reservation={reservationState}
                    reservationDispatch={reservationDispatch}
                />} />
                <Route path="/booking/user-details" element={<UserDetailsForm
                    reservation={reservationState}
                    reservationDispatch={reservationDispatch}
                    submitForm={submitForm}
                />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};
export default Main;

