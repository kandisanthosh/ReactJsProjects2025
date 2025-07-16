import React, { useEffect, useState } from 'react';

function StockDashboard() {
  const [stock, setStock] = useState([]);

  const fetchStocks = () => {
    fetch('/api/stocks')
      .then((response) => response.json)
      .then((data) => setStock(data));
  };

  useEffect(() => {
    fetchStocks();
    const inteval = setInterval(fetchStocks, 50000);
    return () => clearInterval(inteval);
  }, []);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              {' '}
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((stock) => (
              <tr key={stock.symbols}>
                <td>{stock.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockDashboard;
