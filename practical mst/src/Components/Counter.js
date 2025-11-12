import React, { useState } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);

  // 2. Event Handler: Function to increase the count.
  const handleIncrease = () => {
    // Only increase if the count is less than 10.
    if (count < 10) {
      setCount(count + 1);
    }
  };

  // 3. Event Handler: Function to decrease the count.
  const handleDecrease = () => {
    // Only decrease if the count is greater than 0.
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div style={{
        textAlign: 'center',
        
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#6e6c6cff',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        margin: '200px',
        boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)',
        border: '5px solid black',
        // height: '700px',  // Added height for better layout
      }}>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      
      {/* 4. Conditional Message: Show this message only when count reaches 10. */}
      {count === 10 && <p style={{color: 'red'}}>Maximum limit reached!</p>}
      </div>

      </>
   
  );
}

export default Counter;