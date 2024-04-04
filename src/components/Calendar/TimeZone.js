import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const TimezoneDropdown = ({ onSelect }) => {
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    const allTimezones = moment.tz.names();
    setTimezones(allTimezones);
  }, []);

  const handleSelect = (e) => {
    const selectedTimezone = e.target.value;
    onSelect(selectedTimezone);
  };

  return (
    <select onChange={handleSelect}>
      {timezones.map((timezone) => (
        <option key={timezone} value={timezone}>
          {timezone} - {moment().tz(timezone).format('HH:mm:ss')}
        </option>
      ))}
    </select>
  );
};

export default TimezoneDropdown;
