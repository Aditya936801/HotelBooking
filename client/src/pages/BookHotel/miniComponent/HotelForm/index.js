import React from "react";

import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import "./hotelForm.css";


const HotelForm = () => {
  
  return (
    <div className="hotel-form">
      
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
      <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
    
  </LocalizationProvider>
    
    </div>
  );
};

export default HotelForm;
