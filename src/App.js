import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCount((prevState) => prevState - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h2>Count</h2>
        <h1>{count}</h1>
        <button className="decrement" onClick={decrementCount}>
          Decrement
        </button>
        <button className="increment" onClick={incrementCount}>
          Increment
        </button>
      </div>
      <button className="reset" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default App;
