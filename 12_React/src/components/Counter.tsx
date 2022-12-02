import { Dispatch, SetStateAction, ReactNode } from "react";

type CounterProps = {
  setCount: Dispatch<SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h2>{children}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
