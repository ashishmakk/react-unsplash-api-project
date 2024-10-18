import React from "react";
import { useGlobalContext } from "./context";
import { IoMoonSharp } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  console.log(isDarkTheme);

  return (
    <div className='toggle-container'>
      <button type='button' className='toggle-btn' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoMoonSharp className='toggle-icon' />
        ) : (
          <BsSunFill className='toggle-icon' />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
