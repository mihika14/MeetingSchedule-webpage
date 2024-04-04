import React from "react";
import { LuCarrot } from "react-icons/lu";
import {
  GiUnicorn,
  GiThreeFriends,
  GiHummingbird,
  GiFishing,
} from "react-icons/gi";
import { CiMountain1 } from "react-icons/ci";
import {
  FaEarlybirds,
  FaSun,
  FaPalette,
  FaLaptop,
  FaBomb,
  FaQuestion,
} from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";

export default function DetailsCheckbox() {
  const workForOptions = [
    { label: "Myself", icon: LuCarrot },
    { label: "<10 people", icon: GiThreeFriends },
    { label: "10-50 people", icon: GiUnicorn },
    { label: "50+ people", icon: GiHummingbird },
  ];

  const aboutOptions = [
    { label: "Leadership", icon: CiMountain1 },
    { label: "Consulting", icon: FaEarlybirds },
    { label: "Product Management", icon: FaSun },
    { label: "Design", icon: FaPalette },
    { label: "Engineering", icon: FaLaptop },
    { label: "Sales", icon: GiFishing },
    { label: "Marketing", icon: FaBomb },
    { label: "Human Resources", icon: IoDiamond },
    { label: "Education", icon: TbBooks },
    { label: "Something else", icon: FaQuestion },
  ];

  return (
    <div className="details-checkbox">
      <h2>Work For Options</h2>
      {workForOptions.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={option.label}
            name={option.label}
            value={option.label}
          />
          <label htmlFor={option.label}>
            {React.createElement(option.icon)} {option.label}
          </label>
        </div>
      ))}

      <h2>Work For Options</h2>
      {aboutOptions.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={option.label}
            name={option.label}
            value={option.label}
          />
          <label htmlFor={option.label}>
            {React.createElement(option.icon)} {option.label}
          </label>
        </div>
      ))}
 <h2>Please, share anything that will help prepare for our meeting</h2>
      <textarea></textarea>
      <h2>Please, share us the name of your fibery workspace (if any)</h2>
      <textarea></textarea>
    </div>
  );
}
