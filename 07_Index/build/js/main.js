"use strict";
const todayTrans = {
    Pizza: -10,
    Books: -1,
    Job: 50,
};
console.log(todayTrans.Pizza);
console.log(todayTrans["Pizza"]);
let prop = "Pizza";
console.log(todayTrans[prop]);
const todayNet = (trans) => {
    let total = 0;
    for (const tran in trans) {
        total += trans[tran];
    }
    return total;
};
console.log(todayNet(todayTrans));
const student = {
    name: "Mario",
    GPA: 10,
    classes: [1, 2, 3],
};
// keyof assertions
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).forEach(key => {
    console.log(student[key]);
    console.log(student[key]);
});
// record utility type
const logStudent = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudent(student, "GPA");
const monIncome = {
    bonus: 1,
    extra: 1,
    salary: "big",
};
for (const revenue in monIncome) {
    console.log(monIncome[revenue]);
}
