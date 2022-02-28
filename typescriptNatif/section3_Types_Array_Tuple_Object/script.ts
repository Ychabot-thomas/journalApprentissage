// ----- Type Array ----- \\

let colors: string[] | Array<string> = ["red", "green", "blue", "orange"];

let numbers: number[] = [1, 5, 7.5, 0];

let values: any[]; // permet d'y mettre tous les types

values = [
  "bonjour",
  true,
  500,
  {
    id: 300,
    membre: true,
    hobbies: ["foot", "tennis'"],
  },
];

let strNum: (string | number)[] = ["red", 400];

// ----- Type Tuple ----- \\

let x: [string, number] = ["Bonjour", 300];

x = ["Hello", 20];

const member: {
  level: [string, number];
} = {
  level: ["admin", 1],
};

member.level[0] = "user";

// typs : le push marche avec le tuple

// ----- Type Object ----- \\

let carObject = {
  color: "blue",
  date: 2021, // Object
  speed: 300,
};

let carType: {
  color: string;
  date: number; // Type Object
  speed: number;
};

let car: {
  color: string;
  date: number; // Type Object
  speed: number;
} = {
  color: "blue",
  date: 2021, // Object
  speed: 300,
};
