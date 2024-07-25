import React from "react";
//select styling
import { StylesConfig, components } from 'react-select';
import dropdown from "../img/dropdown.svg";
import seatingIcon from "../img/seatingIcon.svg";
import occasionIcon from "../img/occasionIcon.svg";
import timeIcon from "../img/timeIcon.svg";
import dinerIcon from "../img/dinerIcon.svg";

export const SeatingPlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={seatingIcon} alt={"Seating icon"} className="select-icon" />
        Seating
    </components.Placeholder>
);
export const OccasionPlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={occasionIcon} alt={"Occasion icon"} className="select-icon" />
        Occasion
    </components.Placeholder>
);
export const TimePlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={timeIcon} alt={"Time icon"} className="select-icon" />
        Select Time
    </components.Placeholder>
);
export const DinerPlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={dinerIcon} alt={"Diner icon"} className="select-icon" />
        No. of Diners
    </components.Placeholder>
);
export const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <img src={dropdown} alt={"Dropdown indicator"} className="select-icon"/>
    </components.DropdownIndicator>
);
export const TwoColumnsMenuList = (props) => (
    <components.MenuList {...props}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
        >{props.children}</div>
    </components.MenuList>
);
// const PaddedHoverOption = ( props, { isFocused, isSelected }) => (
//     <components.Option {...props}>
//         <div><div style={{
//                     backgroundColor: isFocused
//                         ? "#e0e3e1"
//                         : isSelected
//                         ? "#e0e3e1"
//                         : "#EDEFEE",
//                     margin: '0.5rem',
//                     padding: '0.5rem',
//                     borderRadius: "0.5rem"}}>{props.children}</div></div>
//     </components.Option>
// );

export const selectStyles: StylesConfig = {
    control: (styles) => ({ ...styles,
        backgroundColor: "#EDEFEE",
        padding: "0.5rem 1rem 0.5rem 2rem",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: 700,
    }),
    option: (styles, { isFocused, isSelected }) => ({ ...styles,
        backgroundColor: isFocused
            ? "#e0e3e1"
            : isSelected
            ? "#e0e3e1"
            : "#EDEFEE",
        padding: "1.5rem 2.5rem",
        borderBottom: "1px dashed #495E57",
        color: "#495E57",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: 700,

        ":active" : {
            ...styles[":active"],
            backgroundColor:
            isSelected
            ? "#e0e3e1"
            : undefined,
        },
    }),
    placeholder: (styles) => ({ ...styles,
         color: "#495E57",
         display: "flex",
         alignItems: "center",
         justifyContent: "start",
         gap: "30%",
    }),
    singleValue: (styles) => ({ ...styles, color: "#495E57"}),
    input: (styles) => ({ ...styles, color: "#495E57"}),
    indicatorSeparator: (styles) => ({ ...styles, backgroundColor: "#EDEFEE"}),
    menu: (styles) => ({ ...styles, backgroundColor: "#EDEFEE"}),
};
