const form = document.getElementById("signupForm");
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;

const gift = (age: number) => {
  return age + 3;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (+age.value < 18) {
    console.log("Inscription refusée !");
  } else {
    console.log(
      `Bienvenue ${firstName.value}, vous avez ${
        age.value
      }. Vous aurez droit à un cadeau quand vous aurez ${gift(+age.value)}`
    );
  }
});

// ----- Type inférence ----- \\

let lastName;
lastName = true;
lastName = "chabot";
lastName = 10;

// String
let fullName = "Yann Chabot-Thomas";

// Number
let old = 22;

// Boolean
let isLoggin = true;

fullName = "Gautier Le-Poher";
old = 25;
isLoggin = false;

// ----- Type Assignation ----- \\

let alien: string = "Roger";

let width: number;
width = 30;

// Function

// JS
const sumJS = (val1, val2) => {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2;
  } else {
    throw new Error("Impossible de calculer");
  }
};
