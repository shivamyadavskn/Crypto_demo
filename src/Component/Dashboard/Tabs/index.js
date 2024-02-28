import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import List from '../List';

export default function TabsComponent({coins ,setSearch}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style={
    fontWeight:"bold",
    fontFamily:'inter',
    textTransform:'capatalize',
    fontSize:'1.2rem',
    color:"var(--black)"
  }

  const theme=createTheme({
    palette:{
      primary:{
        main:"#3a80e9"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
        <TabContext value={value}  >
          <TabList onChange={handleChange} variant="fullWidth" >
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
          
          <TabPanel value="grid">
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {
                coins.length>0?(
                  coins.map((item,i)=>(
                    <Grid coin={coins[i]} key={i}/>
                  ))
                ):(
                  <div className='flex justify-center h-[60vh] w-[96vw] text-2xl items-center font-semibold'>
                    <p>
                      No Items Found
                    </p>
                  </div>
                )
              }
            </div>  
          </TabPanel>
          <TabPanel value="list">
          <div className='flex flex-col gap-4'>
              {
                coins.length>0?(
                  coins.map((item,i)=>(
                    <List coin={coins[i]} key={i}/>
                  ))
                ):(
                  <div className='flex justify-center h-[60vh] w-[96vw] text-2xl items-center font-semibold'>
                    <p>
                      No Items Found
                    </p>
                  </div>
                )
              }
            </div>  
          </TabPanel>
        </TabContext>
    </ThemeProvider>
  );
}
