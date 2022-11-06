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
// optional params
const addAll = (a, b, c) => {
    // tyoe guard
    if (c) {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
// default values
const sumAll = (a = 0, b, c = 0) => {
    return a + b + c;
};
logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2));
// Rest params
const total = (a = -10, ...nums) => {
    return a + nums.reduce((total, num) => (total += num));
};
logMsg(total(1, 2, 3, 4));
logMsg(total(undefined, 2, 3, 4));
// never type: only for errors!
const createErr = (msg) => {
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
const isNumber = (value) => {
    return typeof value === "number";
};
const isString = (value) => {
    return typeof value === "boolean";
};
const numberOrString = (value) => {
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
