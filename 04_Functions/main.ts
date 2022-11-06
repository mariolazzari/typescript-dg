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
