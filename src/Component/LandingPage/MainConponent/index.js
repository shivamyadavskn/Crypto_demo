import React from 'react'
import Button from '../../Common/Button'
import './style.css'
import { NavLink } from 'react-router-dom'
import { RWebShare } from 'react-web-share'

function MainComponent() {
  return (
    <div className='flex flex-col  gap-8   md:w-[50vw] py-16'>
        <h1 className='stroke-text text-5xl sm:text-7xl md:text-8xl font-bold'>Track Crypto</h1>
        <h1 className='text-5xl sm:text-6xl md:text-8xl font-bold text-[var(--blue)]'>Real Time.</h1>
        <p className='text-[var(--black)] text-base font-semibold'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className='flex gap-5'>
            <NavLink to='/dashboard'><Button text={"Dashboard"} /></NavLink>
          <RWebShare
              data={{
                text: "Crypto Tracker Application",
                url: "https://-crypto-coin-tracker.vercel.app/",
                title: "Crypto  Tracker",
              }}
              onClick={() => console.log("shared successfully!") }
            >
            <Button text={"Share"} outlined={true} onClick={() => console.log("shared successfully!")} event={true}/>
          </RWebShare>
        </div>
    </div>
  )
}

export default MainComponent
