// ----- Classes ----- \\

class Invoice {
  client: string;
  product: string;
  price: number;

  constructor(client: string, product: string, price: number) {
    this.client = client;
    this.product = product;
    this.price = price;
  }
}

const invoice1 = new Invoice("Dora", "Templacte", 45);
const invoice2: Invoice = { client: "Nora", product: "SEO", price: 200 };

console.log(invoice1);

// ----- Type Array Object instance ----- \\

let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);

// ----- Héritage et Polymorphisme ----- \\

class Mother {
  name: string;
  hair: string;
  eyes: number;

  constructor(n: string, h: string, e: number) {
    this.name = n;
    this.hair = h;
    this.eyes = e;
  }

  speak() {
    console.log(`Je suis ${this.name}, j'ai des cheveux ${this.hair}`);
  }
}

const mother1 = new Mother("Chlotilde", "foncé", 2);
console.log(mother1);
mother1.speak();

class Children extends Mother {
  foot: number;

  constructor(n: string, h: string, e: number, f: number) {
    super(n, h, e);
    this.foot = f;
  }

  speak() {
    console.log(
      `I am ${this.name}, I have ${this.hair} hair, my foot is ${this.foot}`
    );
  }

  speakMothLang() {
    super.speak();
  }
}

const children1 = new Children("Déméter", "brown", 2, 45);
children1.speak();
children1.speakMothLang();

const children2: Mother = new Children("Hercule", "black", 2, 43);
children2.speak();

class Random {
  name: string;
  hair: string;
  eyes: number;

  constructor(n: string, h: string, e: number) {
    this.name = n;
    this.hair = h;
    this.eyes = e;
  }
}

// const person1: Mother = new Random("Tom", "marron", 2); // TS Error manque la méthode speak du type Mother

// ----- Classes (Private, Public, Protected, ReadOnly) ----- \\

class Toto {
  constructor(
    public name: string,
    private hair: string,
    protected eyes: number
  ) {}

  private speak() {
    console.log(`Je suis ${this.name}, j'ai des cheveux ${this.hair}`);
  }

  // getter
  getName() {
    return this.name;
  }

  getHair() {
    return this.hair;
  }

  // setter
  setHairColor(newColor: string) {
    this.hair = newColor;
  }
}

const test = new Toto("Rhea", "MArron", 2);

class Tata extends Toto {
  getData() {
    /*
      Public --> OK
      Private --> NO
      Protected --> OUI aux enfants
    */
    return this.eyes;
  }
}

const test2 = new Tata("Demether", "Black", 2);
console.log(test2.getData());

// ----- ReadOnly ----- \\

class Car {
  //  readonly color: string;
  //  gears: number = 4;

  constructor(c: string, gears: number) {
    // this.color = c;
  }
}

let ford = new Car("white", 5);

// ----- Interfaces ----- \\

class Father {
  name: string;
  eyes: number;

  constructor(n: string, e: number) {
    this.name = n;
    this.eyes = e;
  }

  speak() {
    console.log("Je me présente je m'appelle " + this.name);
  }
}

let henri = new Father("Henri", 2);
henri.speak();

interface People {
  name: string;
  readonly eyes: number;
  speak(a: string): string; // type: string return string
}

let helene: People;
helene = {
  name: "Helene",
  eyes: 2,
  speak(a: string): string {
    return a + " " + this.name;
  },
};

console.log(helene);

const talkingPerson = (a: People, b: string) => {
  return a.speak(b);
};

const result = talkingPerson(helene, " Je m'appelle");
console.log(result);

let cyclope: People = {
  name: "Hélène",
  eyes: 2,
  speak(a: string): string {
    return a + " " + this.name;
  },
};

// ----- Interfaces & Classes ----- \\

interface iHumanSounds {
  talk(): string;
}

interface iAlienSounds {
  telepathy(): string;
}

class Person implements iHumanSounds {
  constructor(readonly name: string, private age: number) {}

  talk() {
    return `je m'appelle ${this.name}, j'ai ${this.age} ans`;
  }
}

class Alien {
  constructor(readonly name: string, private age: number) {}

  telepathy() {
    return `je m'appelle ${this.name}, je suis un alien de ${this.age} ans`;
  }
}

let homer = new Person("Homer", 43); // Person
let roger = new Alien("Roger", 1500);
console.log(homer.talk());
console.log(roger);

let humanMembers: iHumanSounds[];
humanMembers = [];
humanMembers.push(homer);

const form = document.getElementById("signupForm") as HTMLFormElement;
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;
const species = document.getElementById("species") as HTMLSelectElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let humanUser: iHumanSounds;
  let alienUser: iAlienSounds;

  if (species.value === "human") {
    humanUser = new Person(firstName.value, +age.value);
    console.log(humanUser, humanUser.talk());
  } else {
    alienUser = new Alien(firstName.value, +age.value);
    console.log(alienUser, alienUser.telepathy());
  }
});

// ----- Classes Static ----- \\

class PersonStatic {
  static readonly age: number = 30;

  constructor(private name: string) {}

  static talk() {
    console.log("Je suis une personne de " + PersonStatic.age + " ans");
  }
}

const personStatic1 = new PersonStatic("Toto");
PersonStatic.talk(); // Je suis une personne

// ----- Classes Abstraite ----- \\

abstract class PersonAbstract {
  constructor(public name: string) {}

  walk() {
    console.log("je marche");
  }

  abstract updateName(name: string): void;
}

class Child extends PersonAbstract {
  updateName(name: string) {
    this.name = name;
    console.log(this.name);
  }
}

let mario = new Child("Mario");
mario.updateName("Spirou");
console.log(mario);
mario.walk();
