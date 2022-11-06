"use strict";
const a = "hello";
const b = a; // less specific
const c = a; // more specific;
// not valid in react
const d = "world";
const e = "world";
// narrowing
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
// as
const myVal = addOrConcat(1, 2, "concat");
// runtime error
const nextVal = addOrConcat(1, 2, "concat");
// unknow type
// 10 as string
10;
// DOM
const img = document.querySelector("img"); // not null assertion
const el = document.querySelector("#id"); // avoid null check
img.src = "...";
el.src = "";
