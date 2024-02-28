import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDay({days,handleDaysChange ,noText}) {

  return (
    <div className='flex items-center gap-4  '>
      {!noText&&<p className='font-semibold md:text-lg text-[var(--text-grey)]'>Price Change In</p>}
      <div>
        <FormControl sx={{ m: 1, minWidth: 80}} > 
          <InputLabel id="demo-simple-select-label"sx={{color:"var(--black)"}}>Days</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={days}
            label="Days"
            onChange={handleDaysChange}
            sx={{
              height: "2.5rem",
              color: "var(--black)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--black)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--black)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#3a80e9",
                },
              },
            }}
          >
            <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={30}>30 Days</MenuItem>
            <MenuItem value={60}>60 Days</MenuItem>
            <MenuItem value={90}>90 Days</MenuItem>
            <MenuItem value={120}>120 Days</MenuItem>
            <MenuItem value={365}>1 Year</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
