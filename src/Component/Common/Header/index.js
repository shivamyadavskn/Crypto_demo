import React, { useEffect, useState } from 'react'
import TempDrawer from './Drawer'
import Button from '../Button'
import { NavLink } from 'react-router-dom'
import { Switch } from "@mui/material";
import { toast } from "react-toastify";


function Header() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setLight();
    } else {
      setDark();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };


  return (
    <div className="header px-8 py-6 flex justify-between items-center sticky top-0 z-[100] bg-[var(--white)]">
        <div>
          <NavLink to='/' className='text-xl sm:text-2xl md:text-4xl font-bold text-[var(--black)]'>CryptoTracker<span className='text-blue-500'>.</span></NavLink>
        </div>
        <div className="links  hidden md:flex justify-end gap-5 font-[600] text-gray-400  text-xl items-center">
          <div>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
          
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/compare'>Compare</NavLink>
          <NavLink to='/wishlist'>Wishlist</NavLink>
          <NavLink to='/dashboard'><Button text={'Dashboard'} event={false}/></NavLink>
        </div>
        <div className='md:hidden text-gray-400'>
          <TempDrawer/>
        </div>
    </div>
  )
}

export default Header
