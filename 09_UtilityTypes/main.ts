// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assignment, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "cod1",
  title: "assign 1",
  grade: 0,
};

console.log(assign1);
const assign1Graded = updateAssignment(assign1, { grade: 95 });
console.log(assign1Graded);

// Required
const recordAssignment = (assignment: Required<Assignment>): Assignment => {
  return assignment;
};

// readonly
const assignmentVerified: Readonly<Assignment> = {
  ...assign1Graded,
  verified: true,
};

// assignmentVerified.grade=1 error

// Record: Constructs an object type whose property keys are Keys and whose property values are Type.
//This utility can be used to map the properties of a type to another type.
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

console.log(hexColorMap);

type Students = "Mario" | "Mariarosa";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Mario: "C",
  Mariarosa: "A",
};

interface Grades {
  assignment1: number;
  assignment2: number;
}

const gradesData: Record<Students, Grades> = {
  Mariarosa: { assignment1: 10, assignment2: 10 },
  Mario: { assignment1: 8, assignment2: 9 },
};

// Pick
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "cod1",
  grade: 10,
};

// Omit
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "cod1",
  title: "title 1",
};

// exclude
type AdjustedGrade = Exclude<LetterGrades, "U">;

// extract
type higherGrade = Extract<LetterGrades, "A" | "B">;

// non nullable
type AllGrades = "Mario" | "Mariarosa" | null | undefined;
type NameOnly = NonNullable<AllGrades>;

// return type
//type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("New title", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

// returns type
const assignArgs: AssignParams = ["title", 10];
const tsAssign2 = createNewAssign(...assignArgs);

// Awaited
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[] | string> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users!");
    const users: User[] = await res.json();

    return users;
  } catch (ex) {
    const message = ex instanceof Error ? ex.message : "Internal server error";

    return message;
  }
};

type UsersResponse = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(res => console.log(res));
