import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(50))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
      <h3>{counter}</h3>
    </div>
  );
};

export default App;
