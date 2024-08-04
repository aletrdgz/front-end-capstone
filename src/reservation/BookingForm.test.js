import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';
import { BrowserRouter } from "react-router-dom";

describe("Booking Form", () => {
    test('Renders a BookingForm label',() => {
        const mockTimeDispatch = jest.fn();
        const props = {
            availableTimes: {availableTimes: ["6:00","9:00"],},
            timeDispatch: {timeDispatch: mockTimeDispatch,},
          };

        render(
            <BrowserRouter>
                <BookingForm {...props} />
            </BrowserRouter>);
        const labelElement = screen.getByText("Seating preferences");
        expect(labelElement).toBeInTheDocument();
    });
});


