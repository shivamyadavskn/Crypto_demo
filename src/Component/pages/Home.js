import React from 'react'
import MainComponent from '../LandingPage/MainConponent'
import PhoneComponent from '../LandingPage/PhoneComponent'

function Home() {
  return (
    <div className='px-8 py-2 flex flex-col  md:flex-row justify-between bg-[var(--white)] h-screen'>
        <MainComponent/>
        <PhoneComponent/>
    </div>
  )
}

export default Home
