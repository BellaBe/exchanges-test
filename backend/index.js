import express from "express";

import {getBinanceRate, getCoinbaseRate, getKrakenRate, getMinBid} from "./exchange.js"

const app = express();

const port = 3000;

app.use(express.json())

app.get("/exchange-routing", async (req, res) => {
    try {
        if(!Number(req.query.amount)){
            throw new Error("A number is expected")
        }
        const amount = req.query.amount
        const coinbaseRate = await getCoinbaseRate();
        const binanceRate = await getBinanceRate();
        const krakenRate = await getKrakenRate();
    
        const minPrice = getMinBid([coinbaseRate, binanceRate, krakenRate]);
    
        const response = {
            btcAmount: Number(amount),
            usdAmount:Number(minPrice[0]),
            exchange: minPrice[2]
        }
        res.send(response);
    } catch (error) {
        res.send(`Error: ${error.message}`)
    }
    
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})