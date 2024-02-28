import React, { useState } from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { NavLink } from 'react-router-dom';
import { IconButton } from "@mui/material";
import { addToWatchlist } from '../../functions/addToWatchlist';
import { removeFromWatchlist } from '../../functions/removeFromWatchlist';
import { hasBeenAdded } from '../../functions/hasBeenAdded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';

function Grid({coin}) {
    const [added,setAdded]=useState(hasBeenAdded(coin.id));

    const handleClick=(event)=>{
        event.preventDefault();
        if (added) {
            removeFromWatchlist(coin.id);
            setAdded(false);
        } else {
            addToWatchlist(coin.id);
            setAdded(true);
        }
    }
  return (
    <NavLink to={`/coin/${coin.id}`}  className='no-underline'>
        <div className={`relative min-h-[300px] bg-[var(--grey)] rounded-xl px-8 py-10  flex flex-col gap-6 coin-gain border-1 ${coin.price_change_percentage_24h<0 && "coin-loss"}`}>
            <div className='flex justify-between '>
                <div className='flex items-center gap-4 md:text-xl'>
                <img src={coin.image} alt={coin.id} className='w-[56px] h-[56px]'/>
                <div>
                    <div className='uppercase font-bold'>{coin.symbol}</div>
                    <div className='text-[var(--text-grey)]'>{coin.name}</div>
                </div>
                </div>
                <div className='relative bottom-0 right-0'>
                    <IconButton
                        onClick={(event) => handleClick(event)}
                    >
                        {added ? (
                             <BookmarkAddedRoundedIcon
                             sx={{ fontSize: "2rem !important", color:"var(--blue)" }}
                         />
                        ) : (
                       
                        <BookmarkRoundedIcon
                            sx={{ fontSize: "2rem !important", color:"var(--blue)" }}
                        />
                        )}
                    </IconButton>
                </div>
            </div>
            <div className='price-icon inline-flex'>
                {coin.price_change_percentage_24h>0?(
                    <div className='border-2 border-[var(--green)] px-4 py-1 rounded-xl text-[var(--green)]  hover:bg-[var(--green)] hover:text-[var(--black)] font-bold flex gap-2 transition-all duration-300'>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                        <TrendingUpRoundedIcon/>
                    </div> 
                ):(
                    <div className='border-2 border-[var(--red)] px-4 py-1 rounded-xl text-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--black)] font-bold flex gap-2 transition-all duration-300'>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                        <TrendingDownRoundedIcon/>
                    </div>
                )
                }
            </div>
            <div className='coin-price'>
            {coin.price_change_percentage_24h>0?(
                    <div className='text-[var(--green)] text-xl font-bold'>
                        ${coin.current_price.toLocaleString()}
                    </div> 
                ):(
                    <div className='text-[var(--red)] text-xl font-bold'>
                        ${coin.current_price.toLocaleString()}
                    </div>
                )
                }
            </div>
            <div className='text-[var(--text-grey)] font-medium sm:text-lg text-base'>
                <div >Total Volume: {coin.total_volume.toLocaleString()}</div>
                <div>Market Cap: ${coin.market_cap.toLocaleString()}</div>
            </div>
        </div>
        
    </NavLink>
  )
}

export default Grid
