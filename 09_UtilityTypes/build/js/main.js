"use strict";
// https://www.typescriptlang.org/docs/handbook/utility-types.html
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const assign1 = {
    studentId: "cod1",
    title: "assign 1",
    grade: 0,
};
console.log(assign1);
const assign1Graded = updateAssignment(assign1, { grade: 95 });
console.log(assign1Graded);
// Required
const recordAssignment = (assignment) => {
    return assignment;
};
// readonly
const assignmentVerified = Object.assign(Object.assign({}, assign1Graded), { verified: true });
// assignmentVerified.grade=1 error
// Record: Constructs an object type whose property keys are Keys and whose property values are Type.
//This utility can be used to map the properties of a type to another type.
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
console.log(hexColorMap);
const finalGrades = {
    Mario: "C",
    Mariarosa: "A",
};
const gradesData = {
    Mariarosa: { assignment1: 10, assignment2: 10 },
    Mario: { assignment1: 8, assignment2: 9 },
};
const score = {
    studentId: "cod1",
    grade: 10,
};
const preview = {
    studentId: "cod1",
    title: "title 1",
};
// return type
//type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("New title", 100);
console.log(tsAssign);
// returns type
const assignArgs = ["title", 10];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://jsonplaceholder.typicode.com/users!");
        const users = yield res.json();
        return users;
    }
    catch (ex) {
        const message = ex instanceof Error ? ex.message : "Internal server error";
        return message;
    }
});
fetchUsers().then(res => console.log(res));
