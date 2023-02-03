import React , {useState , useEffect} from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import {  useParams } from "react-router-dom";

const  Notifications = () => {
    const { currency } = useParams();
    const [coin_name , setCoinName] = useState()
    const [price , setPrice] = useState()
    const [volumn , setVolumn] = useState()

  useEffect(() => {
    getCoinData(currency)
  },[currency]);

  setInterval(() => {
    getCoinData(currency)
  }, 5000);


  const getCoinData  = async (coin) => {
    try{
        const { data } = await axios.get(`https://satangcorp.com/api/v3/ticker/24hr?symbol=${currency}`);
        let dollarUSLocale = Intl.NumberFormat('en-US');
        console.log("data",dollarUSLocale.format(data.bidPrice))
       
        setCoinName(coin)
        setPrice(dollarUSLocale.format(data.bidPrice))
        setVolumn(dollarUSLocale.format((Math.round(data.quoteVolume * 100) / 100).toFixed(2)))
    }catch(err){
        console.error(err)
    }
   
 }
  
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <h5>Coin</h5>
            <br />
            <Button href="/market/BTC_THB" color="primary">BTC/THB</Button>
            <br/>
            <Button href="/market/BUSD_THB" color="primary">BUSD/THB</Button>
            <br/>
            <Button href="/market/USDT_THB" color="primary">USDT/THB</Button>

          </GridItem>
          
          <GridItem xs={12} sm={12} md={8}>
            <h5>Price List</h5>
            <Card chart>
            <CardBody>
              <h3><b>{coin_name}</b>/THB</h3>
              <h2>
                {price}
              </h2>
              <h4><b>24h. Volumn :</b> {volumn} <b>THB</b></h4>
            </CardBody>
          
          </Card>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}

export default Notifications