import React from "react";
import DetailsCheckbox from "./DetailsCheckbox";

export default function Details() {
  return (
    <div className="details-container">
      <h1>Enter Details</h1>
      <form class="content__form">
        <div class="content__inputs">
          <label>
            <span>Name</span>
            <input required="" type="text" />
          </label>
          <label>
            <span>Email</span>
            <input required="" type="password" />
          </label>
          <button className="guests">Add Guests</button>
        </div>
        <button>Log In</button>
      </form>
      <DetailsCheckbox/>
    </div>
  );
}
