let stringArr = ["one", "two", "three"];
stringArr.push("four");

let guitars = ["Strat", "Tele", 5150];
guitars.push("one");
guitars.push(1);

let mixData = ["EVH", 1984, true];
mixData.push("5150");
mixData.push(5150);
mixData.push(true);

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// tuple
let myTuple: [string, number, boolean] = ["Mario", 47, true];

// Object
let myObj: Object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  props1: "Mario",
  prop2: true,
};

// type
type Guitarist = {
  name?: String;
  active?: boolean; // optional
  albums: (string | number)[];
};

let evh = {
  name: "Eddie",
  active: false,
  albums: [5150, 1984, "Jump"],
};

let jp = {
  name: "Jimmy",
  active: false,
  albums: [1, 2, "III"],
};

jp = evh;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}`;
  }
  return "Hello";
};
greetGuitarist(evh);

// Enums
enum Grade {
  A = 1,
  B,
  C,
  D,
}
console.log(Grade.A);
