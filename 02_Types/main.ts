let myName: string;
let age: number;
let isLoading: boolean;

myName = "Mario";
myName = "Maria";

age = 47;
isLoading = true;

// any type
let all: any;
all = "string";
all = false;
all = 999;

// union type
let album: number | string;
album = 5150;
album = "Van Halen";

let postId: string | number;
let isActive: boolean | number;

// function
const sum = (a: number, b: number) => a + b;

// regex
let regex: RegExp = /\w+/g;
