import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, getQuotes } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const quote = useSelector((state) => state.counter.quote);

  const handleClickIncrement = () => {
    dispatch(increment());
  };

  const handleClickDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getQuotes());
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  console.log(quote);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button">count is: {count}</button>
          <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            <button className="bg-blue-500 rounded-sm" onClick={handleClickIncrement}>Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>
          </div>
        </p>
        <blockquote>{quote?.content}</blockquote>
        <small>- {quote?.author}</small>
      </header>
    </div>
  );
}

export default App;
