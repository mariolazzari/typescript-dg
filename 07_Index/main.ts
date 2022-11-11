interface TransactionObj {
  // Index signature
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todayTrans: TransactionObj = {
  Pizza: -10,
  Books: -1,
  Job: 50,
};

console.log(todayTrans.Pizza);
console.log(todayTrans["Pizza"]);

let prop = "Pizza";
console.log(todayTrans[prop]);

const todayNet = (trans: TransactionObj): number => {
  let total = 0;

  for (const tran in trans) {
    total += trans[tran];
  }

  return total;
};

console.log(todayNet(todayTrans));

interface Student {
  //[key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes: number[];
}

const student: Student = {
  name: "Mario",
  GPA: 10,
  classes: [1, 2, 3],
};

// keyof assertions
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).forEach(key => {
  console.log(student[key as keyof Student]);
  console.log(student[key as keyof typeof student]);
});

// record utility type
const logStudent = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudent(student, "GPA");

type Streams = "salary" | "bonus" | "extra";

/*
interface Incomes {
  [key: string | number]: number;
}
*/
type Incomes = Record<Streams, number | string>;

const monIncome: Incomes = {
  bonus: 1,
  extra: 1,
  salary: "big",
};

for (const revenue in monIncome) {
  console.log(monIncome[revenue as keyof Incomes]);
}
