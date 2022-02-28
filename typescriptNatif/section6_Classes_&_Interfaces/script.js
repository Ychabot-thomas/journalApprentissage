// ----- Classes ----- \\
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice("Dora", "Templacte", 45);
var invoice2 = { client: "Nora", product: "SEO", price: 200 };
console.log(invoice1);
// ----- Type Array Object instance ----- \\
var invoiceArray = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);
// ----- Héritage et Polymorphisme ----- \\
var Mother = /** @class */ (function () {
    function Mother(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("Je suis " + this.name + ", j'ai des cheveux " + this.hair);
    };
    return Mother;
}());
var mother1 = new Mother("Chlotilde", "foncé", 2);
console.log(mother1);
mother1.speak();
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children(n, h, e, f) {
        var _this = _super.call(this, n, h, e) || this;
        _this.foot = f;
        return _this;
    }
    Children.prototype.speak = function () {
        console.log("I am " + this.name + ", I have " + this.hair + " hair, my foot is " + this.foot);
    };
    Children.prototype.speakMothLang = function () {
        _super.prototype.speak.call(this);
    };
    return Children;
}(Mother));
var children1 = new Children("Déméter", "brown", 2, 45);
children1.speak();
children1.speakMothLang();
var children2 = new Children("Hercule", "black", 2, 43);
children2.speak();
var Random = /** @class */ (function () {
    function Random(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    return Random;
}());
// const person1: Mother = new Random("Tom", "marron", 2); // TS Error manque la méthode speak du type Mother
// ----- Classes (Private, Public, Protected, ReadOnly) ----- \\
var Toto = /** @class */ (function () {
    function Toto(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
    }
    Toto.prototype.speak = function () {
        console.log("Je suis " + this.name + ", j'ai des cheveux " + this.hair);
    };
    // getter
    Toto.prototype.getName = function () {
        return this.name;
    };
    Toto.prototype.getHair = function () {
        return this.hair;
    };
    // setter
    Toto.prototype.setHairColor = function (newColor) {
        this.hair = newColor;
    };
    return Toto;
}());
var test = new Toto("Rhea", "MArron", 2);
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.getData = function () {
        /*
          Public --> OK
          Private --> NO
          Protected --> OUI aux enfants
        */
        return this.eyes;
    };
    return Tata;
}(Toto));
var test2 = new Tata("Demether", "Black", 2);
console.log(test2.getData());
// ----- ReadOnly ----- \\
var Car = /** @class */ (function () {
    //  readonly color: string;
    //  gears: number = 4;
    function Car(c, gears) {
        // this.color = c;
    }
    return Car;
}());
var ford = new Car("white", 5);
// ----- Interfaces ----- \\
var Father = /** @class */ (function () {
    function Father(n, e) {
        this.name = n;
        this.eyes = e;
    }
    Father.prototype.speak = function () {
        console.log("Je me présente je m'appelle " + this.name);
    };
    return Father;
}());
var henri = new Father("Henri", 2);
henri.speak();
var helene;
helene = {
    name: "Helene",
    eyes: 2,
    speak: function (a) {
        return a + " " + this.name;
    }
};
console.log(helene);
var talkingPerson = function (a, b) {
    return a.speak(b);
};
var result = talkingPerson(helene, " Je m'appelle");
console.log(result);
var cyclope = {
    name: "Hélène",
    eyes: 2,
    speak: function (a) {
        return a + " " + this.name;
    }
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.talk = function () {
        return "je m'appelle " + this.name + ", j'ai " + this.age + " ans";
    };
    return Person;
}());
var Alien = /** @class */ (function () {
    function Alien(name, age) {
        this.name = name;
        this.age = age;
    }
    Alien.prototype.telepathy = function () {
        return "je m'appelle " + this.name + ", je suis un alien de " + this.age + " ans";
    };
    return Alien;
}());
var homer = new Person("Homer", 43); // Person
var roger = new Alien("Roger", 1500);
console.log(homer.talk());
console.log(roger);
var humanMembers;
humanMembers = [];
humanMembers.push(homer);
var form = document.getElementById("signupForm");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var species = document.getElementById("species");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var humanUser;
    var alienUser;
    if (species.value === "human") {
        humanUser = new Person(firstName.value, +age.value);
        console.log(humanUser, humanUser.talk());
    }
    else {
        alienUser = new Alien(firstName.value, +age.value);
        console.log(alienUser, alienUser.telepathy());
    }
});
// ----- Classes Static ----- \\
var PersonStatic = /** @class */ (function () {
    function PersonStatic(name) {
        this.name = name;
    }
    PersonStatic.talk = function () {
        console.log("Je suis une personne de " + PersonStatic.age + " ans");
    };
    PersonStatic.age = 30;
    return PersonStatic;
}());
var personStatic1 = new PersonStatic("Toto");
PersonStatic.talk(); // Je suis une personne
// ----- Classes Abstraite ----- \\
var PersonAbstract = /** @class */ (function () {
    function PersonAbstract(name) {
        this.name = name;
    }
    PersonAbstract.prototype.walk = function () {
        console.log("je marche");
    };
    return PersonAbstract;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.updateName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    return Child;
}(PersonAbstract));
var mario = new Child("Mario");
mario.updateName("Spirou");
console.log(mario);
mario.walk();
