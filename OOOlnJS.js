//---------------------------------------------------------------------
//____________________Наслідування_____________________________________
//---------------------------------------------------------------------

class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() { return ''; }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        return 'Meow!';
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        return 'Woof!';
    }
}

class Mouse extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        return 'Pee!';
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        return 'Igogo!';
    }
}

const Murka = new Cat('Murka');
console.log(Tom.sound()); // Meow!
const Sirko = new Dog('Sirko');
console.log(Rex.sound()); // Woof!
const Rik = new Mouse('Rik');
console.log(Rik.sound()); // Pee!
const Karl = new Horse('Karl');
console.log(Karl.sound()); // Igogo!

//---------------------------------------------------------------------
//____________________Інкапсуляція_____________________________________
//---------------------------------------------------------------------

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function () {
        document.write("My name is: " + this.name + "; I am a: " + this.age);
    };
};
var Khrystyna = new User("Khrystyna", 27);
Khrystyna.name = 27;
console.log(Khrystyna.name);