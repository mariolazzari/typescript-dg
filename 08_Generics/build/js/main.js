"use strict";
const echoNum = (num) => num;
const echoStr = (str) => str;
console.log(echoNum(1));
console.log(echoStr("a"));
// generic
const echo = (arg) => arg;
console.log(echo(1));
console.log(echo("a"));
const isObj = (arg) => typeof arg === "object" && !Array.isArray(arg) && arg !== null;
console.log(isObj(true));
console.log(isObj([1, 2]));
console.log(isObj({ name: "Mario" }));
const isTrue = (arg) => ({ value: arg, is: !!arg });
// narrowing
const processUser = (arg) => arg;
const getUsersProps = (users, key) => {
    return users.map(user => user[key]);
};
// generic class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Mario");
console.log(store.state);
store.state = "Mariarosa";
console.log(store.state);
//store.state = 12 error
const myState = new StateObject("Mario");
console.log(myState.state);
myState.state = 12;
console.log(myState.state);
