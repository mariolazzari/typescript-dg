"use strict";
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
let bands = [];
bands.push("Van Halen");
// tuple
let myTuple = ["Mario", 47, true];
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    props1: "Mario",
    prop2: true,
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
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return "Hello";
};
greetGuitarist(evh);
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A);
