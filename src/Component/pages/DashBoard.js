import React ,{useState,useEffect} from 'react';
import TabsComponent from '../Dashboard/Tabs';
import SearchIcon from '@mui/icons-material/Search';
import PaginationComp from '../Dashboard/PaginationComponent';
import MoveToTopButton from '../Common/BackToTop/MoveToTop';
import Loader from '../Common/Loader';
import { get100Coins } from '../functions/get100Coin';


function DashBoard() {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');
  const [paginationCoins,setPaginationCoins]=useState([]);
  const [load, setLoad]=useState(true);

  const [pageNumber, setPageNumber] =useState(1);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var startingIndex = (value-1) * 10;
    setPaginationCoins(coins.slice(startingIndex, startingIndex + 10));
  };


  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    setLoad(true);
    const data= await get100Coins();
    if(data){
      setCoins(data);
      setPaginationCoins(data.slice(0,10));
      setLoad(false);
    }
  }

  var filteredCoins=coins.filter((item)=> 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>{load?(
      <Loader/>
    ):(<div className='dashboard flex flex-col bg-[var(--white)] text-[var(--black)]'>
        <MoveToTopButton/>
        <div className='flex justify-center my-4'>
          <div className="seachbar flex justify-center items-center sm:w-[80%] gap-2 p-4 bg-[var(--white)] text-[var(--black)] rounded-3xl text-lg border-2 border-inherit ">
            <SearchIcon/>
            <input className='w-full bg-transparent border-none outline-none' type="text" placeholder='Enter search value' value={search} onChange={(e)=>setSearch(e.target.value)} />
          </div>
        </div>
        <div className='display-data'>
          <TabsComponent coins={search ? filteredCoins : paginationCoins} />
        </div>
        {!search && (
              <PaginationComp pageNumber={pageNumber} handlePageChange={handlePageChange}
              />
            )}   
      </div>)}
    </>
  )
}

export default DashBoard;
