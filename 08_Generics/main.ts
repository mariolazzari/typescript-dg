const echoNum = (num: number): number => num;
const echoStr = (str: string): string => str;

console.log(echoNum(1));
console.log(echoStr("a"));

// generic
const echo = <T>(arg: T): T => arg;
console.log(echo<number>(1));
console.log(echo<string>("a"));

const isObj = <T>(arg: T) =>
  typeof arg === "object" && !Array.isArray(arg) && arg !== null;

console.log(isObj(true));
console.log(isObj([1, 2]));
console.log(isObj({ name: "Mario" }));

// generic in interface
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const isTrue = <T>(arg: T): BoolCheck<T> => ({ value: arg, is: !!arg });

// extends
interface HasID {
  id: number;
}

// narrowing
const processUser = <T extends HasID>(arg: T): T => arg;

const getUsersProps = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map(user => user[key]);
};

// generic class
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("Mario");
console.log(store.state);
store.state = "Mariarosa";
console.log(store.state);
//store.state = 12 error

const myState = new StateObject<number | string>("Mario");
console.log(myState.state);
myState.state = 12;
console.log(myState.state);
