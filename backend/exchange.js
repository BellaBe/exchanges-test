import CoinbasePro from "coinbase-pro";
import axios from "axios";

export const getCoinbaseRate = async () => {
    const coinbasePublicClient = new CoinbasePro.PublicClient();
    try {
        const data = await coinbasePublicClient.getProductOrderBook("BTC-USD");
        data.bids[0].pop();
        data.bids[0].push("coinbase");
        return data.bids[0]
    } catch (error) {
        throw new Error("No response received from Coinbase api");
    }
    
}

export const getBinanceRate = async () => {
    try {
        const binanceURL = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT";
        const apiResponse = await axios.get(binanceURL)
        const bids = apiResponse.data.bids;
        const minBid = getMinBid(bids)
        minBid.push("binance");
        return minBid;
    } catch (error) {
        throw new Error("No response received from Binance api");
    }
    
}

export const getKrakenRate = async () => {
    try {
        const apiResponse = await axios.get("https://api.kraken.com/0/public/Depth?pair=BTCUSD")
    const bids = apiResponse.data.result["XXBTZUSD"].bids
        const minBid = getMinBid(bids)
        minBid.pop();
        minBid.push("kraken");
        return minBid;
    } catch (error) {
        throw new Error("No response received from Kraken api");
    }
    
}

export const getMinBid = (prices) => {
    if(!Array.isArray(prices)){
        throw new Error("An array of data is expected");
    }
    if(prices.length === 0){
        throw new Error("Array of price data is empty");
    }
    if(prices.length === 1){
        return prices[0]
    }
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++){
        if (Number(prices[i][0]) < Number(minPrice[0])){
            minPrice = prices[i]
        }
    }
    return minPrice;
}

