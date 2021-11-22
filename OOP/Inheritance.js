//_____________Inheritance_______________

function Car(model) {
    this.model = model;

    this.getModel = () => this.model;
    this.drive = () => console.log('Driving....');
}
const BMW = new Car('BMW');
const Volvo = new Car('Volvo');

console.log(BMW.drive());
console.log(Volvo.drive());
