// <reference path="PersonInterface.ts" /> // es5
import { Person } from "./PersonInterface.js"; // es2015(es6)

// namespace App {
const person = new Person("Homer", 43);
console.log(person);
// }
