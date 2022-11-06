type One = string;
type Two = string | number;
type Three = "hello";

const a: One = "hello";
const b = a as Two; // less specific
const c = a as Three; // more specific;

// not valid in react
const d = <One>"world";
const e = <string | number>"world";

// narrowing
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

// as
const myVal: string = addOrConcat(1, 2, "concat") as string;
// runtime error
const nextVal: number = addOrConcat(1, 2, "concat") as number;

// unknow type
// 10 as string
10 as unknown as string;

// DOM
const img = document.querySelector("img")!; // not null assertion
const el = document.querySelector("#id") as HTMLImageElement; // avoid null check

img.src = "...";
el.src = "";
