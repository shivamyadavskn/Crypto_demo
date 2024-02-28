import React, { useState } from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import './style.css';
import { NavLink } from 'react-router-dom';
import { IconButton } from "@mui/material";
import { addToWatchlist } from '../../functions/addToWatchlist';
import { removeFromWatchlist } from '../../functions/removeFromWatchlist';
import { hasBeenAdded } from '../../functions/hasBeenAdded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';

function List({coin}) {

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
        <div className={`hover:bg-[var(--grey)] bg-[var(--grey)] rounded-xl md:p-4  px-2 py-2  flex items-center justify-evenly sm:justify-start coin-gain hover:border-1 ${coin.price_change_percentage_24h<0 && "coin-loss"}`}>
            <div className='flex items-center gap-4 md:text-xl md:w-1/5 sm:w-1/4 '>
                
                <Tooltip placement="bottom-start" title="Image">
                    <img src={coin.image} alt={coin.id} className='w-[56px] h-[56px]'/>
                </Tooltip>
                <Tooltip placement="bottom-start" title="Info">
                    <div>
                        <div className='uppercase font-bold text-[var(--text-grey)]'>{coin.symbol}</div>
                        <div className='text-[var(--text-grey)] hidden sm:block'>{coin.name}</div>
                    </div>
                </Tooltip>
            </div>
            <Tooltip placement="bottom-start" title="Price">
                <div className='price-icon md:flex justify-start hidden md:w-1/5 sm:w-1/4'>
                    {coin.price_change_percentage_24h>0?(
                        <div className='border-2 border-[var(--green)] md:px-4 px-2 py-1 rounded-2xl text-[var(--green)]  hover:bg-[var(--green)] hover:text-[var(--black)] font-bold flex gap-2 transition-all duration-300'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                            <TrendingUpRoundedIcon/>
                        </div> 
                    ):(
                        <div className='border-2 border-[var(--red)] px-4 py-1 rounded-2xl text-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--black)] font-bold flex gap-2 transition-all duration-300'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                            <TrendingDownRoundedIcon/>
                        </div>
                    )
                    }
                </div>
            </Tooltip>
            <Tooltip placement="bottom-start" title="Current Price">
                <div className='coin-price items-start md:w-1/5 sm:w-1/4'>
                    {coin.price_change_percentage_24h>0?(
                            <div className='text-[var(--green)] md:text-xl font-bold'>
                            ${coin.current_price.toLocaleString()}
                            </div> 
                        ):(
                            <div className='text-[var(--red)] md:text-xl font-bold'>
                            ${coin.current_price.toLocaleString()}
                            </div>
                        )
                    }
                </div>
            </Tooltip>
            <Tooltip placement="bottom-start" title="Total Volume">
                <div className='text-[var(--text-grey)] font-medium md:text-lg md:w-1/5 sm:w-1/4'>
                    <div className='hidden sm:block'> {coin.total_volume.toLocaleString()}</div>
                </div>
            </Tooltip>
            <Tooltip placement="bottom-start" title="Market Cap">
                <div className='text-[var(--text-grey)] font-medium md:text-lg md:w-1/5 sm:w-1/4'>
                    <div className='hidden md:block'> ${coin.market_cap.toLocaleString()}</div>
                    <div className='md:hidden'> ${coin.market_cap.toString().substring(0,3)}B</div>
                </div>
            </Tooltip>
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
    </NavLink>
  )
}

export default List
