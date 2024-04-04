import React, { useState, useEffect } from "react";

const TimeSlotSelector = ({ selectedDate }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    generateTimeSlots();
  }, [selectedDate]);

  const generateTimeSlots = () => {
    const selectedDateObj = new Date(selectedDate);
    const startTime = new Date(selectedDateObj);
    startTime.setHours(9, 0, 0);

    const endTime = new Date(selectedDateObj);
    endTime.setHours(12, 0, 0);

    const slots = [];
    while (startTime < endTime) {
      slots.push(new Date(startTime));
      startTime.setMinutes(startTime.getMinutes() + 30);
    }

    setTimeSlots(slots);
  };

  const handleSlotSelect = (e) => {
    const selectedSlotIndex = e.target.value;
    setSelectedSlot(timeSlots[selectedSlotIndex]);
  };

  return (
    <div className="time-slot-selector">
      <option value="">Select a time slot</option>
      {timeSlots.map((slot, index) => (
        <option key={index} value={index} onClick={handleSlotSelect}>
          {slot.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </option>
      ))}
      <div className="time-block">
        {selectedSlot && (
          <p>
            Selected time slot:{" "}
            {selectedSlot.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
      <button className="time-next">Next</button>
    </div>
  );
};

export default TimeSlotSelector;
