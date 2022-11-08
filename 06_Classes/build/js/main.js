"use strict";
/*
class Coder {
  // error without constructor
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}
*/
// visibiity (avoid props definition)
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // return private prop
    getAge() {
        return `Hello, I'm ${this.age} old`;
    }
}
const mario = new Coder("Mario", "Metal", 47);
console.log(mario.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    // access to protected prop
    getLang() {
        return `I write ${this.lang}`;
    }
}
const mary = new WebDev("HP", "Mariarosa", "rock", 46);
console.log(mary.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${action}`;
    }
}
const marioGtr = new Guitarist("Mario", "guitar");
console.log(marioGtr.play("guitar"));
// static props
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
const peep1 = new Peeps("P1");
const peep2 = new Peeps("P2");
const peep3 = new Peeps("P3");
console.log("Total peeps:", Peeps.count);
// getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        throw new Error("Value must be an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["Pink Floyd", "Rush", "Symphony X"];
myBands.data = ["Shadow Gallery", ...myBands.data];
console.log(myBands.data);
