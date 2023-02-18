import React from "react";
import { useParams } from "react-router-dom";
import stocks from "../../data";

const StockPage = () => {
    const { symbol } = useParams();

    const stock = stocks.find((stock) => stock.symbol === symbol);

    console.log(stock);

    let set
    if (stock.change < 0) {
        set = 'red'
      } else {
        set = 'green'
      }

    return (
        <div className="single-stock">
            <h1>STOCK</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Company Name</th>
                        <th>Last Price</th>
                        <th>Change</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Open</th>
                    </tr>
                    <tr>
                        <td>{stock.name} | ({stock.symbol})</td>
                        <td>{stock.lastPrice}</td>
                        <td style={{color: set}}>{stock.change}</td>
                        <td>{stock.high}</td>
                        <td>{stock.low}</td>
                        <td>{stock.open}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StockPage;