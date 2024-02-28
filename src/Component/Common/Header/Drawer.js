import React ,{ useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Switch } from "@mui/material";
import { toast } from "react-toastify";

export default function TempDrawer() {
  const [state, setState] =useState(false);
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
    <div>
      <IconButton onClick={()=>setState(true)}><MenuRoundedIcon className='text-[var(--darkgrey)]'/></IconButton>
        <Drawer anchor={'right'} open={state} onClose={()=>setState(false)}>
            <div className='p-5 font-semibold w-40 sm:w-60 flex flex-col items-start text-[var(--text-grey)] bg-[var(--white)] h-[100%] '>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/compare'>Compare</NavLink>
            <NavLink to='/wishlist'>Wishlist</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <div>
              <Switch
                checked={darkMode}
                onClick={() => {
                  changeMode();
                }}
              />
          </div>          
          </div>
        </Drawer>
    </div>
  );
}
