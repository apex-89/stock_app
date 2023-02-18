import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import stocks from '../../data'
import './index.css'

const DashboardPage = () => {
  const navigate = useNavigate();

  const [ stock, setStock ] = useState(stocks);

  const handleStockClick = (symbol) => {
    navigate(`/stock/${symbol}`)
  };

  let set
  let stockList = stock.map((stock) => {
    if (stock.change < 0) {
      set = 'red'
    } else {
      set = 'green'
    }
    return (
    <tr key={stock.symbol} onClick={() => handleStockClick(stock.symbol)}>
      <td>{stock.name} | ({stock.symbol})</td>
      <td>{stock.lastPrice}</td>
      <td style={{color: set}}>{stock.change}</td>
    </tr>
    )
  });
  
  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <tbody>
          <tr>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Change</th>
          </tr>
            {stockList}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardPage