// type alias
type StringOrNumber = string | number;

type StringOrNumberArray = StringOrNumber[];

type Guitarist = {
  name: string;
  active: boolean;
  albums: StringOrNumberArray; //albums: (string | number)[];
};

type UserId = StringOrNumber;

// littreral types
let myName: "Mario";
let username: "Mario" | "Mariarosa";
username = "Mariarosa";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

// void
const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("Ciao");
logMsg(add(1, 2));

const sub = function (a: number, b: number): number {
  return a - b;
};

// function definition
type MathFunction = (a: number, b: number) => number;
const mult: MathFunction = (a, b) => a * b;
logMsg(mult(2, 2));

//function interface
interface IMathFunction {
  (a: number, b: number): number;
}

const div: IMathFunction = function (a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
};
logMsg(div(3, 4));
logMsg(div(5, 0));

// optional params
const addAll = (a: number, b: number, c?: number): number => {
  // tyoe guard
  if (c) {
    return a + b + c;
  }
  return a + b;
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));

// default values
const sumAll = (a: number = 0, b: number, c: number = 0): number => {
  return a + b + c;
};

logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2));

// Rest params
const total = (a: number = -10, ...nums: number[]): number => {
  return a + nums.reduce((total, num) => (total += num));
};

logMsg(total(1, 2, 3, 4));
logMsg(total(undefined, 2, 3, 4));

// never type: only for errors!
const createErr = (msg: string): never => {
  throw new Error(msg);
};

// avoid infinite loop: check return type
const infinity = () => {
  let i = 0;
  // now return is never
  while (true) {
    i++;
    // now return tyoe is void
    if (i > 100) {
      break;
    }
  }
};

// custom guard types
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

const isString = (value: any): boolean => {
  return typeof value === "boolean";
};

const numberOrString = (value: number | string): string => {
  /*
  switch (typeof value) {
    case "number":
      return "number";

    case "string":
      return " string";

    default:
      return createErr("type not supported");
  }*/

  if (isNumber(value)) {
    return "number";
  }

  if (isString(value)) {
    return "string";
  }

  return createErr("Type not supported");
};
