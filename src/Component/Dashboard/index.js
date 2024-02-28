import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TabsComponent from './Tabs';

function Dashboard() {
  return (
    <div className='dashboard flex flex-col p-5'>
      <div className='flex justify-center mb-4'>
        <div className="seachbar flex justify-center items-center w-[80%] gap-2 p-4 bg-[#f3f3f3] rounded-3xl text-lg ">
          <SearchIcon/>
          <input className='w-full bg-transparent border-none outline-none' type="text" placeholder='Enter search value' />
        </div>
      </div>
      <div className='display-data'>
        <TabsComponent/>
      </div>
    </div>
  )
}

export default Dashboard
