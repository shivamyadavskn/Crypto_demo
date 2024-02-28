import React, { useEffect, useState } from 'react'
import CompareCoin from '../Compare/compareCoinData'
import { get100Coins } from '../functions/get100Coin'
import getCoinData from '../functions/getCoinData';
import { coinObject } from '../functions/coinObject';
import { getCoinPrices } from '../functions/getCoinPrices';
import { chartDataSet } from '../functions/chartDataset';
import Loader from '../Common/Loader';
import List from '../Dashboard/List';
import PriceToggle from '../Coin/PriceToggle';
import LineChart from '../Coin/LineChart';
import CoinInfo from '../Coin/CoinInfo';
import MoveToTopButton from '../Common/BackToTop/MoveToTop';

function Compare() {
  const [load,setLoad]=useState(true);
  const [coin1,setCoin1]=useState('bitcoin');
  const [coin2,setCoin2]=useState('ethereum');
  const [days,setDays]=useState(30);
  const [priceType,setPriceType]=useState('prices')
  const [coin1Data,setCoin1Data]=useState('bitcoin');
  const [coin2Data,setCoin2Data]=useState('bitcoin');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [allCoins,setAllCoins]=useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData= async()=>{
      setLoad(true);
      const data=await get100Coins();
      if(data){
        setAllCoins(data);
        const data1 = await getCoinData(coin1);
        const data2 = await getCoinData(coin2);
        if(data1){
          coinObject(setCoin1Data, data1);
        }
        if(data2){
          coinObject(setCoin2Data, data2);
        }
        if(data1&&data2){
          const prices1 = await getCoinPrices(coin1, days ,priceType);
          const prices2 = await getCoinPrices(coin2, days,priceType);
          if(prices1.length>0 && prices2.length>0){
            chartDataSet(setChartData, prices1, coin1, coin2, prices2);
            // console.log(prices1 ,prices2);
            setLoad(false);
          }
      }
    

    }
    // console.log('triggered  ')
  }

  const handleCoinChange = async (e, isCoin1) => {
    setLoad(true);
    if (isCoin1) {
      setCoin1(e.target.value);
      const data1 = await getCoinData(e.target.value);
      coinObject(setCoin1Data, data1);
      const prices1 = await getCoinPrices(e.target.value, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);
      if(prices1 && prices2 ){
        chartDataSet(setChartData, prices1, coin1Data, coin2Data, prices2);
      }
    } else {
      setCoin2(e.target.value);
      const data2 = await getCoinData(e.target.value);
      coinObject(setCoin2Data, data2);
      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(e.target.value, days, priceType);
      if(prices1 && prices2 ){
        chartDataSet(setChartData, prices1, coin1Data, coin2Data, prices2);
      }
    }
    setLoad(false);
  };

  const handlePriceTypeChange = async (e) => {
    setLoad(true);
    setPriceType(e.target.value);
    const prices1 = await getCoinPrices(coin1, days, e.target.value);
    const prices2 = await getCoinPrices(coin2, days, e.target.value);
    if(prices1&&prices2){
      chartDataSet(setChartData, prices1, coin1Data, coin2Data, prices2);
    }
    setLoad(false);
  };

  const handleDaysChange = async (e) => {
    setLoad(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(coin1, e.target.value, priceType);
    const prices2 = await getCoinPrices(coin2, e.target.value, priceType);
    if(prices1 && prices2 ){
      chartDataSet(setChartData, prices1, coin1Data, coin2Data, prices2);
    }
    setLoad(false);
  };


  return (
    <div className='p-4 md:p-8 bg-[var(--white)] text-[var(-black)]'>
      {
        load?(
          <Loader/>
          ):(
          <div className='bg-[var(--white)]'>
            <MoveToTopButton/>
            <div className='p-4'>
              <CompareCoin coin1={coin1} coin2={coin2} days={days} handleCoinChange={handleCoinChange} handleDaysChange={handleDaysChange} allCoins={allCoins}/>

            </div>
            <div className='my-8'>
              <List coin={coin1Data}/>
            </div>
            <div className='my-8'>
              <List coin={coin2Data}/>
            </div>
            <div className="bg-[var(--grey)] rounded-xl p-8">
              <div className='flex justify-center my-4'>
                <PriceToggle
                  handlePriceTypeChange={handlePriceTypeChange}
                  priceType={priceType}
                />
              </div>
                <LineChart
                  chartData={chartData}
                  multiAxis={true}
                  priceType={priceType}
                />
            </div>
            <div className='my-8'>
              <CoinInfo name={coin1Data.name} desc={coin1Data.desc} />
            </div>
            <div className='my-8'>
              <CoinInfo name={coin2Data.name} desc={coin2Data.desc} />
            </div> 
          </div>
        )
      }
    </div>
  )
}

export default Compare
