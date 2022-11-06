// type alias
type StringOrNumber = string | number;

type StringOrNumberArray = StringOrNumber[];

type Guitarist = {
  name: string;
  active: boolean;
  albums: StringOrNumberArray; //albums: (string | number)[];
};

type UserId = StringOrNumber;

// littreral types
let myName: "Mario";
let username: "Mario" | "Mariarosa";
username = "Mariarosa";
