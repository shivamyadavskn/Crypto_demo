import axios from "axios";

const getCoinData=(id)=>{

   const myData=axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response)=>{
                return response.data;
        })
        .catch((err)=>{
                console.log(err);
        })

    return myData;
}

export default getCoinData;
