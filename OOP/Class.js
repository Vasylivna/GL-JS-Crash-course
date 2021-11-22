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

const Tom = new Cat('Tom');
console.log(Tom.sound()); // Meow!
const Rex = new Dog('Rex');
console.log(Rex.sound()); // Woof!

