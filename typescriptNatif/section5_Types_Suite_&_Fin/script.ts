// ----- Type Enum ----- \\

/*

ADMIN = 0
MODERATOR = 1
SUPPORT = 2
USER_READ_ONLY

*/

// JS

const _SUPPORT = 2;

const usersJS = {
  pseudo: "Batman",
  level: 2,
};

if (usersJS.level === _SUPPORT) {
  console.log(
    `Bienvenue ${usersJS.pseudo}, vous travaillez au service support.`
  );
}

// TS

enum Level {
  ADMIN, // 0
  MODERATOR, // 1
  SUPPORT, // 2
  USER_READ_ONLY, // 3
}

const userTS = {
  pseudo: "Batman",
  level: Level.SUPPORT,
};

if (userTS.level === Level.SUPPORT) {
  console.log(
    `Bienvenue ${usersJS.pseudo}, vous travaillez au service support(${Level.SUPPORT}).`
  );
}

enum Color {
  Red = 1,
  Green, // 2
  Blue = 10,
}

let c = Color.Green;
let colorName: string = Color[2];

console.log(c);
console.log(colorName);

// ----- Type Any ----- \\

let anyData: any = "Salut";
console.log(typeof anyData); // string

anyData = 20;
console.log(typeof anyData); // number

anyData = true;
console.log(typeof anyData); // boolean

anyData = ["Hello"];
console.log(typeof anyData); // object

anyData = {
  colors: ["green", "red", "blue"],
};
console.log(typeof anyData); // object

let anyDataArray: any[] = [];
anyDataArray = ["Hello", 25, true, ["red", "blue"], { name: "Dupont" }];

anyDataArray.push("Salut");
console.log(anyDataArray);

let userInfos: { name: any; pseudo: any } = {
  name: "Hakerman",
  pseudo: 123456,
};
console.log("userInfos1", userInfos);

userInfos.pseudo = "Livai";
console.log("userInfos2", userInfos);

// ----- Type Unknow ----- \\

let inputData: unknown;
inputData = 20;
console.log(typeof inputData); // boolean

let inputAge: number;

if (typeof inputData === "number") {
  // inputData est maintenant de Type number
  inputAge = inputData; // OK
  console.log(typeof inputAge, "inputAge");
}

// Vaut mieux utiliser Unknow plus vérif que Any

// ----- Type Void ----- \\

const gift = (age: number) => {
  const result = age + 3;
  return result.toString();
};

console.log(typeof gift(40));

const clgData = () => {
  console.log("Hello World");
};

console.log(clgData()); // Undefined // Valeur en JS

// ----- Type Function ----- \\

function cadeau(num: number) {
  return num + 3;
}

function displayCLg(arg: number) {
  return arg;
}

let age: (num: number) => number; // OR let age: Function; function générale
age = cadeau;
console.log("first age", age(20));

age = displayCLg;
console.log("second age", age(20));

// ----- Type Function / Param Facultatif et par défaut ----- \\

const buildName = (firstName: string, lastName: string = "Chabot") => {
  return firstName + " " + lastName;
};

let result1 = buildName("Yann", "Chabot-Thomas");
console.log(result1);

const secondBuildName = (firstName: string = "Yann", lastName: string) => {
  return firstName + " " + lastName;
};

let result2 = secondBuildName(undefined, "Damien");

// ----- Type Rest ----- \\

const divColors = document.getElementById("colors");

let colors = function (arg1: string, ...restOfColors: string[]) {
  console.log(restOfColors);

  const h1 = document.createElement("H1");
  h1.innerHTML = `Titre: ${arg1}`;
  divColors.appendChild(h1);

  const ul = document.createElement("ul");

  for (let i in restOfColors) {
    let li = document.createElement("li");
    li.innerHTML = restOfColors[i];
    ul.appendChild(li);
  }

  divColors.appendChild(ul);
};

colors("List1:", "Green", "Red", "Orange");
colors("List2:", "Blue", "Black", "White");

// ----- Callback Function Type ----- \\

function giftCallback(age: number, sum: (arg: number) => void) {
  const memberAge = age + 3;
  sum(memberAge);
}

giftCallback(40, (num) => {
  console.log(num);
});

// ----- Union Type ----- \\

let firstName: string | number = "Roger";
firstName = 200;

let arrayName: (string | number)[];
arrayName = ["Roger", 200];

function sum(arg1: number | string, arg2: number | string) {
  let result: number | string;
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + arg2;
  } else {
    result = arg1.toString() + arg2.toString();
  }
  return result;
}

console.log(sum(10, 20));
console.log(sum("Hello", 40));
console.log(sum("Bonjour", " Jean-Luc"));

// ----- Type Aliases ----- \\

type NumStr = number | string;

let data: NumStr;
let userId: NumStr;

data = 200;

const welcome = (username: NumStr) => {
  console.log("Bienvenue", username);
};

welcome("Dupont");

type ObjIdUser = { id: number; userName: NumStr };

const getProfilData = (user: ObjIdUser) => {
  console.log(`id: ${user.id} userName: ${user.userName}`);
};

getProfilData({ id: 123456, userName: "Dupont" });

const invoice = (
  productName: { name: string; price: number },
  user: ObjIdUser
) => {
  console.log(
    `Produit : ${productName.name} / Prix : ${productName.price} / idClient : ${user.id} / Nom du client : ${user.userName}`
  );
};

let productDetails = {
  name: "formation TS",
  price: 14,
};

invoice(productDetails, { id: 098765, userName: "Yann" });

// ----- Literal Type ----- \\

let PI: 3.14;

function total(
  arg1: number,
  arg2: number,
  totalVersion: "getStringValue" | "getSquare"
) {
  let result;
  if (totalVersion === "getStringValue") {
    result = arg1.toString + arg2.toString(); // string
  } else if (totalVersion === "getSquare") {
    const val = arg1 + arg2;
    result = val ** 2;
  } else {
    result = arg1 + arg2; // number
  }
  return result;
}

const totalone = total(20, 10, "getStringValu"); // TS ERROR
const totaltwo = total(20, 10, "getStringValue"); // OK
const totalthree = total(20, 10, "getSquare"); // OK

// ----- Type Never ----- \\

// Cas 1

type AcceptedValues = string | number;
function format(value: AcceptedValues) {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value.toString();
  } else {
    const verifyCases: never = value; // TS ERROR
  }
}

function throwError(errMsg): never {
  throw new Error(errMsg); // Stop
}

// Cas 2

function getTotal(arg: number) {
  if (arg < 5) {
    return throwError("Attention le total < 5 !!!");
  } else if (arg === 5) {
    console.log(arg); // pas de return, TS getTotal --> Never
  } else {
    return arg + 10; // TS getTotal --> Number
  }
}

// Cas 3

const sayHello = (textMsg: string) => {
  let i;
  while (i < 5) {
    console.log(textMsg);
    i++;
  }
};

sayHello("Hello World");

// ----- Type Null & Undefined ----- \\

// Undefined VS Null
console.log(undefined === null); // False
console.log(undefined == null); // True

// typeof
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// !
console.log(null); // null
console.log(!null); // true
console.log(!!null); // false

// return undefined|null
const foo = (arg: string): string | null | undefined => {
  return arg;
};

const result = foo("Hello");
if (result !== null) {
  console.log(typeof result); // string
}

console.log(null + 200); // 200
const element = document.querySelector("elementFictif");
console.log(element); // null

console.log(undefined + 200); // Inconu + 200

const users: any = {};
console.log(users.age);

let value: number;
console.log(value); // undefined

let value2: undefined;
console.log(value2); // undefined

let value3: null = null;
console.log(value3); // undefined

let value4: unknown | any;
value4 = null; // TS OK
value4 = undefined; // TS OK
// Pour faire en sorte que ce ne soit pas possible d'assigner null | undefined, modifier le fichier de config tsconfig.json, ce référé à la doc :)

// ----- Type Assertions ----- \\

let someValue: unknown = "This is a string";

let strlenght = (someValue as string).length;
let strlenght2 = (<string>someValue).length;

console.log(strlenght);

const prenom = document.getElementById("firstName") as HTMLInputElement;
console.log(typeof prenom); // object

const ages = document.getElementById("age") as HTMLInputElement;
console.log(typeof ages.value);

const prenom2 = document.getElementById("firstName");
let inputValue = (<HTMLInputElement>prenom2).value;
console.log(typeof inputValue); // string

// Exo Form

// Get Value
const form = document.querySelector("#signupForm") as HTMLFormElement; // Element | null
const firstNameForm = document.getElementById("firstName") as HTMLInputElement;
const ageForm = document.getElementById("age") as HTMLInputElement;
const genderForm = document.getElementById("gender") as HTMLSelectElement;

// Validation Form

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(
    firstNameForm.value,
    " : name / age : ",
    ageForm.value,
    " / gender : ",
    genderForm.value
  );
});
