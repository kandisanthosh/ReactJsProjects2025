import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> counter value is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increse Count</button>
      <div></div>
      <div></div>
      <button onClick={() => setCount(count - 1)}>Dcrease Count</button>
    </div>
  );
}

export default Counter;
