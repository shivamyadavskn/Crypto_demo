// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coinObject } from '../functions/coinObject';
import List from '../Dashboard/List';
import Loader from '../Common/Loader';
import CoinInfo from '../Coin/CoinInfo';
import getCoinData from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { chartDataSet } from '../functions/chartDataset';
import LineChart from '../Coin/LineChart';
import SelectDay from '../Coin/selectDays';
import PriceToggle from '../Coin/PriceToggle';


function CoinPage() {
    const [load,setLoad]=useState(true);
    const [coinData,setCoinData]=useState([]);
    const [days,setDays]=useState(30);
    const [priceType,setPriceType]=useState("prices");
    const [chartData,setChartData]=useState({
        labels: [],
        datasets: [],
      });
    const {id}=useParams();

    useEffect(()=>{
        if(id){
            getData(id,days);
        }
    },[id,days])

    async function getData(id,days){
        setLoad(true);
        const data= await getCoinData(id);
        if(data){
            coinObject(setCoinData,data);
            const prices=await getCoinPrices(id,days,priceType);
            if (prices) {
                chartDataSet(setChartData, prices, data);
                setLoad(false);
              }
        }
    }

    async function handleDaysChange(event){
        setLoad(true);
        const prices = await getCoinPrices(id, event.target.value);
        if (prices) {
            chartDataSet(setChartData, prices, coinData);
            setLoad(false);
        }
        setDays(event.target.value);
    }

    async function handlePriceTypeChange(event){
        setLoad(true);
        setPriceType(event.target.value);
        const prices = await getCoinPrices(id, days, event.target.value);
        if (prices) {
          chartDataSet(setChartData, prices, coinData);
        }
        setLoad(false);
      };
    

  return (
    <>{load?(
        <Loader/>
    ):(
        <div className='m-8'>
            <div className=' my-4 bg-[var(--grey)] rounded-xl text-[var(--black)]'>
                <List coin={coinData}/>
            </div>
            <div className='bg-[var(--grey)] p-4 rounded-xl'>
                <div>
                    <SelectDay days={days} handleDaysChange={handleDaysChange}/>
                </div>
                <div className='flex justify-center my-6'>
                    <PriceToggle handlePriceTypeChange={handlePriceTypeChange} priceType={priceType}/>

                </div>
                <LineChart chartData={chartData} priceType={priceType}/>
            </div>
            <div className='my-4'>
                <CoinInfo name={coinData.name} desc={coinData.desc}/>
            </div>
        </div>
    )
    }</>
  )
}

export default CoinPage
