"use strict";
// littreral types
let myName;
let username;
username = "Mariarosa";
// functions
const add = (a, b) => {
    return a + b;
};
// void
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Ciao");
logMsg(add(1, 2));
const sub = function (a, b) {
    return a - b;
};
const mult = (a, b) => a * b;
logMsg(mult(2, 2));
const div = function (a, b) {
    if (b === 0) {
        return 0;
    }
    return a / b;
};
logMsg(div(3, 4));
logMsg(div(5, 0));
