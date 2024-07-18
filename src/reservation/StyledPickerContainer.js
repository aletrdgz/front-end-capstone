import React from "react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles'
//input
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import dateIcon from "../img/dateIcon.svg";
import dropdown from "../img/dropdown.svg";

// export default function InputWithIcon() {
//     return (
//     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <dateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="With sx" variant="standard" />
//     </Box>
//   );
// };

const StyledTextField = styled(TextField)({
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    border: 'none',
    backgroundColor: '#EDEFEE',
    // padding: "1rem",
    display: "flex",
    // '& .MuiInputBase-input': {
    //     '&:hover, &.Mui-focusVisible': {
    //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    //     },
    //     '&.Mui-active': {
    //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    //     },
    // },    
    // InputProps={{
    //     startAdornment=(
    //         <InputAdornment position="start">
    //         {dateIcon}
    //         </InputAdornment>
    //     ),
    // }}
    '& .MuiInputBase-root': {
       padding: "0.5rem 1.8rem 0.5rem 2.7rem", // Remove default padding
        // gap: "30%",
        // textAlign: "center",
        // justifyContent:"center",
    },
    '& .MuiInputBase-input': {
       paddingLeft: "25%", // Remove default padding
       fontSize: "1.5rem",
       fontWeight: 700,
       color: "#495E57",
       // gap: "30%",
        // textAlign: "center",
        // justifyContent:"center",
    },
    //  '& .MuiInputBase-adornedStart-root': {
    //    marginRight: "30%", // Adjust spacing as needed
    //  },
    //  '& .MuiOutlinedInput-root': {
    //    '& fieldset': {
    //      borderColor: 'gray', // Default border color
    //    },
    //    '&:hover fieldset': {
    //      borderColor: 'blue', // Border color on hover
    //    },
    //    '&.Mui-focused fieldset': {
    //      borderColor: 'green', // Border color on focus
    //    },
    //  },
    // '& .MuiFormHelperText-root': {
    //    position: 'absolute',
    //    bottom: '-20px', // Adjust this value as needed
    //    transition: 'none', // Disable transition
    //  },
  });

  const CustomIconButton = styled('div')(({ theme }) => ({
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: "0.5rem 1rem 0.5rem 2rem",
    // borderRadius: '50%',
    // '&:hover': {
    // //   backgroundColor: "#EDEFEE",
    //   transition: 'none', // Disable transition on hover
    // },
    // '&:active': {
    // //   backgroundColor: "#EDEFEE",
    //   transition: 'none', // Disable transition on active
    // },
  }));

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
                // lineHeight: "1rem",
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
        // textAlign: "center",
        // alignItems: "center",
        // justifyContent: "center",
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
                // inputAdornment: InputAdornment,
                // openPickerButton: IconButton,
                // openPickerIcon: DropdownIcon,
                openPickerIcon: (props) => (
                    <CustomIconButton {...props}>
                      <DropdownIcon />
                    </CustomIconButton>
                  ),
                }}
                slotProps={{
                    // openPickerIcon: { fontSize: 'large' },
                    // openPickerButton: { color: '#495E57' },
                    textField: {
                        InputProps: { startAdornment: <DateIcon /> }
                    // //   variant: 'filled',
                    // //   focused: true,
                    //   color: "primary",
                    },
                }}
                renderInput={(params) => <TextField {...params} />}
                label="Select date"
                format="LL"
            />
        </ThemeProvider>
    );
  };
