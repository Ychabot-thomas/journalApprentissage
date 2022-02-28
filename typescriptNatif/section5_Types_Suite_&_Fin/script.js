// ----- Type Enum ----- \\
/*

ADMIN = 0
MODERATOR = 1
SUPPORT = 2
USER_READ_ONLY

*/
// JS
var _SUPPORT = 2;
var usersJS = {
    pseudo: "Batman",
    level: 2
};
if (usersJS.level === _SUPPORT) {
    console.log("Bienvenue " + usersJS.pseudo + ", vous travaillez au service support.");
}
// TS
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
var userTS = {
    pseudo: "Batman",
    level: Level.SUPPORT
};
if (userTS.level === Level.SUPPORT) {
    console.log("Bienvenue " + usersJS.pseudo + ", vous travaillez au service support(" + Level.SUPPORT + ").");
}
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(c);
console.log(colorName);
// ----- Type Any ----- \\
var anyData = "Salut";
console.log(typeof anyData); // string
anyData = 20;
console.log(typeof anyData); // number
anyData = true;
console.log(typeof anyData); // boolean
anyData = ["Hello"];
console.log(typeof anyData); // object
anyData = {
    colors: ["green", "red", "blue"]
};
console.log(typeof anyData); // object
var anyDataArray = [];
anyDataArray = ["Hello", 25, true, ["red", "blue"], { name: "Dupont" }];
anyDataArray.push("Salut");
console.log(anyDataArray);
var userInfos = {
    name: "Hakerman",
    pseudo: 123456
};
console.log("userInfos1", userInfos);
userInfos.pseudo = "Livai";
console.log("userInfos2", userInfos);
// ----- Type Unknow ----- \\
var inputData;
inputData = 20;
console.log(typeof inputData); // boolean
var inputAge;
if (typeof inputData === "number") {
    // inputData est maintenant de Type number
    inputAge = inputData; // OK
    console.log(typeof inputAge, "inputAge");
}
// Vaut mieux utiliser Unknow plus vérif que Any
// ----- Type Void ----- \\
var gift = function (age) {
    var result = age + 3;
    return result.toString();
};
console.log(typeof gift(40));
var clgData = function () {
    console.log("Hello World");
};
console.log(clgData()); // Undefined // Valeur en JS
// ----- Type Function ----- \\
function cadeau(num) {
    return num + 3;
}
function displayCLg(arg) {
    return arg;
}
var age; // OR let age: Function; function générale
age = cadeau;
console.log("first age", age(20));
age = displayCLg;
console.log("second age", age(20));
// ----- Type Function / Param Facultatif et par défaut ----- \\
var buildName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Chabot"; }
    return firstName + " " + lastName;
};
var result1 = buildName("Yann", "Chabot-Thomas");
console.log(result1);
var secondBuildName = function (firstName, lastName) {
    if (firstName === void 0) { firstName = "Yann"; }
    return firstName + " " + lastName;
};
var result2 = secondBuildName(undefined, "Damien");
// ----- Type Rest ----- \\
var divColors = document.getElementById("colors");
var colors = function (arg1) {
    var restOfColors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfColors[_i - 1] = arguments[_i];
    }
    console.log(restOfColors);
    var h1 = document.createElement("H1");
    h1.innerHTML = "Titre: " + arg1;
    divColors.appendChild(h1);
    var ul = document.createElement("ul");
    for (var i in restOfColors) {
        var li = document.createElement("li");
        li.innerHTML = restOfColors[i];
        ul.appendChild(li);
    }
    divColors.appendChild(ul);
};
colors("List1:", "Green", "Red", "Orange");
colors("List2:", "Blue", "Black", "White");
// ----- Callback Function Type ----- \\
function giftCallback(age, sum) {
    var memberAge = age + 3;
    sum(memberAge);
}
giftCallback(40, function (num) {
    console.log(num);
});
// ----- Union Type ----- \\
var firstName = "Roger";
firstName = 200;
var arrayName;
arrayName = ["Roger", 200];
function sum(arg1, arg2) {
    var result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2;
    }
    else {
        result = arg1.toString() + arg2.toString();
    }
    return result;
}
console.log(sum(10, 20));
console.log(sum("Hello", 40));
console.log(sum("Bonjour", " Jean-Luc"));
var data;
var userId;
data = 200;
var welcome = function (username) {
    console.log("Bienvenue", username);
};
welcome("Dupont");
var getProfilData = function (user) {
    console.log("id: " + user.id + " userName: " + user.userName);
};
getProfilData({ id: 123456, userName: "Dupont" });
var invoice = function (productName, user) {
    console.log("Produit : " + productName.name + " / Prix : " + productName.price + " / idClient : " + user.id + " / Nom du client : " + user.userName);
};
var productDetails = {
    name: "formation TS",
    price: 14
};
invoice(productDetails, { id: 098765, userName: "Yann" });
// ----- Literal Type ----- \\
var PI;
function total(arg1, arg2, totalVersion) {
    var result;
    if (totalVersion === "getStringValue") {
        result = arg1.toString + arg2.toString(); // string
    }
    else if (totalVersion === "getSquare") {
        var val = arg1 + arg2;
        result = Math.pow(val, 2);
    }
    else {
        result = arg1 + arg2; // number
    }
    return result;
}
var totalone = total(20, 10, "getStringValu"); // TS ERROR
var totaltwo = total(20, 10, "getStringValue"); // OK
var totalthree = total(20, 10, "getSquare"); // OK
function format(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value.toString();
    }
    else {
        var verifyCases = value; // TS ERROR
    }
}
function throwError(errMsg) {
    throw new Error(errMsg); // Stop
}
// Cas 2
function getTotal(arg) {
    if (arg < 5) {
        return throwError("Attention le total < 5 !!!");
    }
    else if (arg === 5) {
        console.log(arg); // pas de return, TS getTotal --> Never
    }
    else {
        return arg + 10; // TS getTotal --> Number
    }
}
// Cas 3
var sayHello = function (textMsg) {
    var i;
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
var foo = function (arg) {
    return arg;
};
var result = foo("Hello");
if (result !== null) {
    console.log(typeof result); // string
}
console.log(null + 200); // 200
var element = document.querySelector("elementFictif");
console.log(element); // null
console.log(undefined + 200); // Inconu + 200
var users = {};
console.log(users.age);
var value;
console.log(value); // undefined
var value2;
console.log(value2); // undefined
var value3 = null;
console.log(value3); // undefined
var value4;
value4 = null; // TS OK
value4 = undefined; // TS OK
// Pour faire en sorte que ce ne soit pas possible d'assigner null | undefined, modifier le fichier de config tsconfig.json, ce référé à la doc :)
// ----- Type Assertions ----- \\
var someValue = "This is a string";
var strlenght = someValue.length;
var strlenght2 = someValue.length;
console.log(strlenght);
var prenom = document.getElementById("firstName");
console.log(typeof prenom); // object
var ages = document.getElementById("age");
console.log(typeof ages.value);
var prenom2 = document.getElementById("firstName");
var inputValue = prenom2.value;
console.log(typeof inputValue); // string
// Exo Form
// Get Value
var form = document.querySelector("#signupForm"); // Element | null
var firstNameForm = document.getElementById("firstName");
var ageForm = document.getElementById("age");
var genderForm = document.getElementById("gender");
// Validation Form
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(firstNameForm.value, " : name / age : ", ageForm.value, " / gender : ", genderForm.value);
});
