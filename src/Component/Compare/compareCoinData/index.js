import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import SelectDay from "../../Coin/selectDays";

function CompareCoin({
    coin1,
    coin2,
    days,
    handleCoinChange,
    handleDaysChange,
    allCoins
  }) {

    // styling of select
    const selectStyle = {
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
    };
  
    return (
      <div className="flex flex-wrap gap-6 items-center">
        <p className="font-semibold text-lg text-[var(--text-grey)]">Crypto 1</p>
            <FormControl style={{minWidth: 120}}>
                <Select
                value={coin1}
                onChange={(e) => handleCoinChange(e, true)}
                sx={selectStyle}
                >
                {allCoins&&(allCoins
                    .filter((coin) => coin.id !== coin2)
                    .map((coin, index) => (
                    <MenuItem key={index} value={coin.id}>
                        {coin.name}
                    </MenuItem>
                    )))}
                </Select>
            </FormControl>
      
            <p className="font-semibold text-lg text-[var(--text-grey)]">Crypto 2</p>
                <FormControl style={{minWidth: 120}}>
                <Select
                value={coin2}
                onChange={(e) => handleCoinChange(e, false)}
                sx={selectStyle}
                >
                {allCoins&&(allCoins
                    .filter((coin) => coin.id !== coin1)
                    .map((coin, index) => (
                    <MenuItem key={index} value={coin.id}>
                        {coin.name}
                    </MenuItem>
                    )))}
                </Select>
            </FormControl>
      
            <SelectDay
              days={days}
              handleDaysChange={(e) => handleDaysChange(e)}
              noText={true}
            />    
      </div>
    );
  }

export default CompareCoin;
