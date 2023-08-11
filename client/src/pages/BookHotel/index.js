import React from "react";
import { useLocation } from "react-router-dom";
import "./bookHotel.css"
import HotelDescription from "./miniComponent/HotelDescription";
import HotelForm from "./miniComponent/HotelForm";
const BookHotel = () => {
  const { state } = useLocation();
  return( <div className="book-hotel-container">
    <HotelDescription state={state} />
    <HotelForm/>
  </div>);
};

export default BookHotel;
