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