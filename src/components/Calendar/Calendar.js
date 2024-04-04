import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import TimezoneDropdown from "./TimeZone";
import TimeSlotSelector from "./Timings"; 

export default function CalendarPage() {
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTimezoneSelect = (timezone) => {
    setSelectedTimezone(timezone);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h1 className="text-center">Select a Date & Time</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span>{" "}
        {selectedDate.toDateString()}
      </p>
      <div className="timezone">
        <h1>Timezone Dropdown Example</h1>
        <TimezoneDropdown onSelect={handleTimezoneSelect} />
        <div>Selected Timezone: {selectedTimezone}</div>
      </div>
      <div className="time-slot-container">
        <h2>Select a Time Slot</h2>
        <TimeSlotSelector selectedDate={selectedDate} />
      </div>
    </div>
  );
}
