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
  // avoid initialization
  secondLang!: string;

  constructor(
    public name: string,
    public readonly music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  // return private prop
  public getAge() {
    return `Hello, I'm ${this.age} old`;
  }
}

const mario = new Coder("Mario", "Metal", 47);
console.log(mario.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  // access to protected prop
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const mary = new WebDev("HP", "Mariarosa", "rock", 46);
console.log(mary.getLang());

// interfaces
interface Musician {
  name: string;
  instrument: string;
  //play(action: string): string;
  play: (action: string) => string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} plays ${action}`;
  }
}

const marioGtr = new Guitarist("Mario", "guitar");
console.log(marioGtr.play("guitar"));

// static props
class Peeps {
  static count: number = 0;

  static getCount() {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const peep1 = new Peeps("P1");
const peep2 = new Peeps("P2");
const peep3 = new Peeps("P3");
console.log("Total peeps:", Peeps.count);

// getters and setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
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
