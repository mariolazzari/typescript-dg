import { ChangeEventHandler, ReactNode, useReducer } from "react";
import "./App.css";

type ChildrenTyoe = {
  children: (num: number) => ReactNode;
};

type ReducerState = {
  count: number;
  text: string;
};

const initState: ReducerState = {
  count: 0,
  text: "",
};

const enum ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: ACTION_TYPE;
  payload?: string;
};

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ACTION_TYPE.NEW_INPUT:
      return {
        ...state,
        text: action.payload ?? "",
      };

    default:
      throw new Error();
  }
};

function Counter({ children }: ChildrenTyoe) {
  // const [count, setCount] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => {
    // setCount(prev => prev + 1);
    dispatch({ type: ACTION_TYPE.INCREMENT });
  };

  const decrement = () => {
    // setCount(prev => prev - 1);
    dispatch({ type: ACTION_TYPE.DECREMENT });
  };

  const onTextChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  return (
    <>
      <h1>Count: {children(state.count)}</h1>

      <div className="card">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <input type="text" onChange={onTextChange} />
      <p>{state.text}</p>
    </>
  );
}

export default Counter;
