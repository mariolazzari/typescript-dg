import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title="Heading title" />
      <Section>This is my section</Section>
      <Section title="My title">This is another section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["item 1", "item 2", "item 3s"]}
        render={(item: string) => <p className="gold">{item}</p>}
      />
    </>
  );
}

export default App;
