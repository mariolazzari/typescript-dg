import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";
import "./App.css";

interface User {
  id: number;
  username: string;
}

type Fib = (n: number) => number;

const fib: Fib = (n: number) => {
  if (n < 2) {
    return 2;
  }
  return fib(n - 1) + fib(n - 2);
};

const myNum = 37;

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({} as User);
  const [users, setUsers] = useState<User[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  const add = useCallback(
    (
      _e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount(prev => prev + 1);
    },
    []
  );

  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={add}>Add</button>
      <p>{`Fib(${myNum}) = ${result}`}</p>
      <input ref={inputRef} type="text" />

      <p>Total users: {users.length}</p>
    </div>
  );
}

export default App;
