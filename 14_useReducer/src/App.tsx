import { useState, ReactNode } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter children={(num: number) => <>Couter: {num}</>} />
    </div>
  );
}

export default App;
