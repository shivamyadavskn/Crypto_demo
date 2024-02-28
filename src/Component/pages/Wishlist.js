import React, { useEffect, useState } from 'react'
import TabsComponent from '../Dashboard/Tabs'
import Loader from '../Common/Loader'
import Button from '../Common/Button';
import { get100Coins } from '../functions/get100Coin';

function Wishlist() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    if (coins && allCoins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
      setLoading(false);
    }
  };

  return (
    <div className='md:p-8 bg-[var(--white)] text-[var(-black)]'>
      <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <h1 style={{ textAlign: "center", marginBottom: "2rem" ,color:"var(--black)" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="/dashboard">
                  <Button text={"Dashboard"} />
                </a>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <TabsComponent coins={myWatchlist} />
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  )
}

export default Wishlist
