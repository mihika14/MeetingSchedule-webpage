import React from "react";
import CalendarPage from "../Calendar/Calendar";
import Details from "../Details/Details";

export default function Homepage() {
  return (
    <div className="homepage">
      <CalendarPage />
      <Details/>
    </div>
  );
}
