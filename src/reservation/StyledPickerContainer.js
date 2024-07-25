import React from "react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles'
//input
// import FormControl from '@mui/material/FormControl';
import dateIcon from "../img/dateIcon.svg";
import dropdown from "../img/dropdown.svg";

const StyledTextField = styled(TextField)({
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    border: 'none',
    backgroundColor: '#EDEFEE',
    display: "flex",
    '& .MuiInputBase-root': {
       padding: "0.5rem 1.8rem 0.5rem 2.7rem", // Remove default padding
    },
    '& .MuiInputBase-input': {
        fontSize: "1.5rem",
        paddingLeft: "25%", // Remove default padding
        fontWeight: 700,
        color: "#495E57",
    },
    '& .MuiInputBase-input::placeholder': {
        opacity: "1", // This will make the placeholder fully opaque
    },
    // '& .MuiInputBase-adornedStart': {
    //     '&.Mui-selected': {
    //             display: "none",
    //             },
    // },
});

const newTheme = (theme) => createTheme({
...theme,
components: {
    MuiDateCalendar: {
    styleOverrides: {
        root: {
        color: "#495E57",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        border: "none",
        backgroundColor: "#EDEFEE",
        padding: "0rem 1rem 1.2rem 1rem",
        }
        }
    },
    MuiPickersCalendarHeader: {
        styleOverrides: {
        root: {
            fontSize: "1.5rem",
            fontWeight: 700,
            padding: "1rem 1rem 1.5rem 0.5rem",
        }
        }
    },
    MuiPickersDay: {
        styleOverrides: {
        root: {
            fontSize: "1.25rem",
            fontWeight: 500,
            color: "#495E57",
            '&.Mui-selected': {
                backgroundColor: "#495E57", // Change selected background color
                '&:hover': {
                    backgroundColor: "#495E57", // Change hover background color when selected
                    },
                },
        },
        '&:hover': {
            backgroundColor: "#e0e3e1", // Change hover background color
        },
        },
    },
    MuiDayCalendar: {
        styleOverrides: {
            root: {
            fontSize: "1.25rem",
            fontWeight: 500,
            color: "#495E57",
            }
        }
    },
},
typography: {
    fontFamily: 'Karla, sans-serif',
    fontSize: "2.5rem",
    color: "#495E57",
},
});

const DateIcon = () => (
        <img src={dateIcon} alt={"Calendar icon"} className="datepicker-icon" />
);

const DropdownIcon = () => (
    <img src={dropdown} alt={"Dropdown indicator"} className="datepicker-icon" />
);

export default function StyledPickerContainer() {
    return (
        <ThemeProvider theme={newTheme}>
            <DesktopDatePicker
                slots={{
                textField: StyledTextField,
                openPickerIcon: DropdownIcon,
                }}
                slotProps={{
                    textField: {
                        InputProps: {
                            startAdornment: <DateIcon />,
                            placeholder: "Select date",
                         },
                    },
                }}
                format="LL"
                renderInput={(params) => <TextField {...params} />}
            />
        </ThemeProvider>
    );
};
